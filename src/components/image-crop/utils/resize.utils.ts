/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export function resizeCanvas(canvas: HTMLCanvasElement, width: number, height: number): void {
    const WIDTH_SOURCE = canvas.width;
    const HEIGHT_SOURCE = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    const RATIO_W = WIDTH_SOURCE / width;
    const RATIO_H = HEIGHT_SOURCE / height;
    const RATIO_W_HALF = Math.ceil(RATIO_W / 2);
    const RATIO_H_HALF = Math.ceil(RATIO_H / 2);

    const ctx = canvas.getContext('2d');
    if (ctx) {
        const img = ctx.getImageData(0, 0, WIDTH_SOURCE, HEIGHT_SOURCE);
        const img2 = ctx.createImageData(width, height);
        const data = img.data;
        const data2 = img2.data;

        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                const x2 = (i + j * width) * 4;
                const CENTER_Y = j * RATIO_H;
                let weight = 0;
                let weights = 0;
                let WEIGHTS_ALPHA = 0;
                let GX_R = 0;
                let GX_G = 0;
                let GX_B = 0;
                let GX_A = 0;

                const XX_START = Math.floor(i * RATIO_W);
                const YY_START = Math.floor(j * RATIO_H);
                let XX_STOP = Math.ceil((i + 1) * RATIO_W);
                let YY_STOP = Math.ceil((j + 1) * RATIO_H);
                XX_STOP = Math.min(XX_STOP, WIDTH_SOURCE);
                YY_STOP = Math.min(YY_STOP, HEIGHT_SOURCE);

                for (let yy = YY_START; yy < YY_STOP; yy++) {
                    const dy = Math.abs(CENTER_Y - yy) / RATIO_H_HALF;
                    const CENTER_X = i * RATIO_W;
                    const w0 = dy * dy; // pre-calc part of w
                    for (let xx = XX_START; xx < XX_STOP; xx++) {
                        const dx = Math.abs(CENTER_X - xx) / RATIO_W_HALF;
                        const w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            // pixel too far
                            continue;
                        }
                        // hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        const POS_X = 4 * (xx + yy * WIDTH_SOURCE);
                        // alpha
                        GX_A += weight * data[POS_X + 3];
                        WEIGHTS_ALPHA += weight;
                        // colors
                        if (data[POS_X + 3] < 255) {
                            weight = weight * data[POS_X + 3] / 250;
                        }
                        GX_R += weight * data[POS_X];
                        GX_G += weight * data[POS_X + 1];
                        GX_B += weight * data[POS_X + 2];
                        weights += weight;
                    }
                }
                data2[x2] = GX_R / weights;
                data2[x2 + 1] = GX_G / weights;
                data2[x2 + 2] = GX_B / weights;
                data2[x2 + 3] = GX_A / WEIGHTS_ALPHA;
            }
        }


        canvas.width = width;
        canvas.height = height;

        // draw
        ctx.putImageData(img2, 0, 0);
    }
}
