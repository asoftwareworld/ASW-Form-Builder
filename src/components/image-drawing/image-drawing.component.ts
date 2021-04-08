/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef } from '@angular/core';
import { fabric } from 'fabric';

@Component({
    selector: 'asw-image-drawing',
    styleUrls: ['./image-drawing.component.scss'],
    templateUrl: './image-drawing.component.html'
})
export class AswImageDrawingComponent implements OnInit, OnChanges {

    @Input() public src?: string;
    @Input() public width?: number;
    @Input() public height?: number;

    @Input() public forceSizeCanvas = true;
    @Input() public forceSizeExport = false;
    @Input() public enableRemoveImage = false;
    @Input() public enableLoadAnotherImage = false;
    @Input() public enableTooltip = true;
    @Input() public showCancelButton = true;

    /* @deprecated Use i18n.saveBtn */
    @Input() public saveBtnText = 'Save';
    /* @deprecated Use i18n.cancelBtn */
    @Input() public cancelBtnText = 'Cancel';
    /* @deprecated Use i18n.loading */
    @Input() public loadingText = 'Loading…';

    @Input() public loadingTemplate?: TemplateRef<any>;
    @Input() public errorTemplate?: TemplateRef<any>;

    @Input() public outputMimeType = 'image/jpeg';
    @Input() public outputQuality = 0.8;

    // @Input() public borderCss = 'none';

    @Input() public drawingSizes: { [name: string]: number } = {
        small: 5,
        medium: 10,
        large: 25,
    };

    @Input() public colors: { [name: string]: string } = {
        black: '#000',
        white: '#fff',
        yellow: '#ffeb3b',
        red: '#f44336',
        blue: '#2196f3',
        green: '#4caf50',
        purple: '#7a08af',
    };

    @Output() public save: EventEmitter<Blob> = new EventEmitter<Blob>();
    @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();

    public currentTool = 'brush';
    public currentSize = 'small';
    public currentColor = 'black';
    // public i18n: I18nInterface = I18nEn;

    public canUndo = false;
    public canRedo = false;

    public isLoading = false;
    public hasError = false;
    public errorMessage = '';

    private canvas!: fabric.Canvas;
    private stack: fabric.Object[] = [];

    public colorsName: string[] = [];
    public drawingSizesName: string[] = [];

    private imageUsed?: fabric.Image;

    constructor() {
    }

    public ngOnInit(): void {
        this.colorsName = Object.keys(this.colors);
        this.drawingSizesName = Object.keys(this.drawingSizes);

        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            isDrawingMode: true
        });
        this.canvas.backgroundColor = 'white';

        if (this.src) {
            this.importPhotoFromSrc(this.src);
        } else {
            if (!this.width || !this.height) {
                throw new Error('No width or hight given !');
            }

            this.canvas.setWidth(this.width);
            this.canvas.setHeight(this.height);
        }

        this.canvas.on('path:created', () => {
            this.stack = [];
            this.setUndoRedo();
        });

        this.selectTool(this.currentTool);
        this.selectColor(this.currentColor);
        this.selectDrawingSize(this.currentSize);
    }

    // Tools
    public selectTool(tool: string): void {
        this.currentTool = tool;
    }

    public selectDrawingSize(size: string): void {
        this.currentSize = size;
        if (this.canvas) {
            this.canvas.freeDrawingBrush.width = this.drawingSizes[size];
        }
    }

    public selectColor(color: string): void {
        this.currentColor = color;
        if (this.canvas) {
            this.canvas.freeDrawingBrush.color = this.colors[color];
        }
    }

    // Actions

    public undo(): void {
        if (this.canUndo) {
            const lastId = this.canvas.getObjects().length - 1;
            const lastObj = this.canvas.getObjects()[lastId];
            this.stack.push(lastObj);
            this.canvas.remove(lastObj);
            this.setUndoRedo();
        }
    }

    public redo(): void {
        if (this.canRedo) {
            const firstInStack = this.stack.splice(-1, 1)[0];
            if (firstInStack) {
                this.canvas.insertAt(firstInStack, this.canvas.getObjects().length - 1, false);
            }
            this.setUndoRedo();
        }
    }

    public clearCanvas(): void {
        if (this.canvas) {
            this.canvas.remove(...this.canvas.getObjects());
            this.setUndoRedo();
        }
    }

    public saveImage(): void {
        this.canvas.getElement().toBlob(
            (data: Blob) => {
                this.save.emit(data);
                const url = window.URL.createObjectURL(data);
                window.open(url);
            },
            this.outputMimeType,
            this.outputQuality
        );
    }

    public cancelAction(): void {
        this.cancel.emit();
    }

    private setUndoRedo(): void {
        this.canUndo = this.canvas.getObjects().length > 0;
        this.canRedo = this.stack.length > 0;
        // this.canvas.renderAll();
    }

    public importPhotoFromFile(event: Event | any): void {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type.match('image.*')) {
                this.importPhotoFromBlob(file);
            } else {
                throw new Error('Not an image !');
            }
        }
    }

    public removeImage(): void {
        if (this.imageUsed) {
            this.imageUsed.dispose();
            this.imageUsed = null as any;
        }
        this.canvas.backgroundImage = null as any;

        if (this.width && this.height) {
            this.canvas.setWidth(this.width);
            this.canvas.setHeight(this.height);
        }

        this.canvas.renderAll();
    }

    public get hasImage(): boolean {
        return !!this.canvas.backgroundImage;
    }

    private importPhotoFromSrc(src: string): void {
        this.isLoading = true;
        let isFirstTry = true;
        const imgEl = new Image();
        imgEl.setAttribute('crossOrigin', 'anonymous');
        imgEl.src = src;
        imgEl.onerror = () => {
            // Retry with cors proxy
            if (isFirstTry) {
                imgEl.src = 'https://cors-anywhere.herokuapp.com/' + this.src;
                isFirstTry = false;
            } else {
                this.isLoading = false;
                this.hasError = true;
                // this.errorMessage = this.getTextTranslated('loadError').replace('%@', this.src as string);
            }
        };
        imgEl.onload = () => {
            this.isLoading = false;
            this.imageUsed = new fabric.Image(imgEl);

            this.imageUsed.cloneAsImage((image: any) => {
                let width = imgEl.width;
                let height = imgEl.height;

                if (this.width) {
                    width = this.width;
                }
                if (this.height) {
                    height = this.height;
                }

                image.scaleToWidth(width, false);
                image.scaleToHeight(height, false);

                this.canvas.setBackgroundImage(image, ((img: HTMLImageElement) => {
                    if (img) {
                        if (this.forceSizeCanvas) {
                            this.canvas.setWidth(width);
                            this.canvas.setHeight(height);
                        } else {
                            this.canvas.setWidth(image.getScaledWidth());
                            this.canvas.setHeight(image.getScaledHeight());
                        }
                    }
                }), {
                    crossOrigin: 'anonymous',
                    originX: 'left',
                    originY: 'top'
                });
            });
        };
    }

    private importPhotoFromBlob(file: Blob | File): void {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (evtReader: any) => {
            if (evtReader.target.readyState === FileReader.DONE) {
                this.importPhotoFromSrc(evtReader.target.result);
            }
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && !changes.src.firstChange && changes.src.currentValue) {
            if (typeof changes.src.currentValue === 'string') {
                this.importPhotoFromSrc(changes.src.currentValue);
            } else if (changes.src.currentValue instanceof Blob) {
                this.importPhotoFromBlob(changes.src.currentValue);
            }
        }
    }
}
