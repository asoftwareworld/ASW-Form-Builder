<h1 align="center">ASW Form Builder - Design dynamic web forms.</h1>

<p align="center">
  <img src="asw.svg" alt="asw-logo" width="310px" height="100px"/>
  <br>
  <em>ASW Form Builder helps you with rapid development and designed web forms which includes several controls
    <br> using Angular/Angular-Material and Bootstrap.</em>
  <br>
</p>

<p align="center">
  <a href="https://asoftwareworld.com/#/product/free-form-builder/demo"><strong>Angular form builder demo</strong></a>
  <br>
</p>

<p align="center">
    <a href="CONTRIBUTING.md">Contributing Guidelines</a>
    ·
    <a href="https://github.com/asoftwareworld/ASW-Form-Builder/issues">Submit an Issue</a>
    ·
    <a href="https://asoftwareworld.github.io/form-builder">Blog</a>
    <br>
    <br>
</p>

<p align="center">
    <a href="https://circleci.com/gh/asoftwareworld/ASW-Form-Builder">
        <img src="https://badge.fury.io/js/%40asoftwareworld%2Fform-builder.svg" alt="CI status" />
    </a>&nbsp;
    <a href="https://www.npmjs.com/package/@asoftwareworld/form-builder">
        <img src="https://circleci.com/gh/asoftwareworld/ASW-Form-Builder.svg?style=svg" alt="Asw form builder on npm" />
    </a>&nbsp;
    <a href="https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Discord conversation" />
    </a>
</p>

<hr>

# Documentation

`ASW Form Builder` helps you with rapid development and designed web forms which includes several controls. The key feature of `Form Builder` is to make your content attractive and effective. We can customize our control at run time and preview the same before final submission.

`Form Builder` is compatible with the latest version of Angular and Angular Material. Only a few clicks can create an attractive web form and provide a JSON Schema to render all controls.

## Installation
Below are some prerequisites before install `Form Builder`.

### Step 1: Install Angular Material
Install `Angular Material` by running the following command:

```html
ng add @angular/material
```

### Step 2: Install Bootstrap
Install `Bootstrap` source Sass files by running the following command:
```html
npm install bootstrap
```

### Step 3: Install ASW Form Builder
Install `Form Builder` to set up in the project by running the following command:
```html
npm install @asoftwareworld/form-builder
```

### Step 4: Import the component modules
Import the NgModule for each component you want to use:

```
import { AswFormBuilderModule } from '@asoftwareworld/form-builder/form-builder';
import { AswPreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
// ...

@NgModule({
    imports: [
        // shown passing global defaults (optional)
        AswFormBuilderModule,
        AswPreviewTemplateModule
        ...
    ]
    // ...
})
export class AppModule {}
```
### Step 5: Include a theme

Including a theme is required to apply the form builder and controls design.

You can include this theme in component `SCSS or CSS` files to not use this globally in your application.

```html
@import '~@asoftwareworld/form-builder/theme/asw-theme.min.css';
```

If you're using the Angular CLI, and you want to use themes globally in your application. Then you can add this to your `styles.css` or `angular.json`:

`styles.css or styles.scss`:

```html
@import '~@asoftwareworld/form-builder/theme/asw-theme.min.css';
```
or 

`angular.json`:
```html
"styles": [
  "./node_modules/@asoftwareworld/form-builder/theme/asw-theme.min.css"
],
```

If you are not using the Angular CLI, you can include a theme via a `<link>` element in your `index.html`.

## Add a selector to HTML
In your template, use the component selector:
```
<asw-form-builder [uploadData]="jsonData1"
    [isShowPreviewButton]="isShowPreviewButton"
    [isShowJsonDataButton]="isShowJsonDataButton"
    [isShowPublishButton]="isShowPublishButton"
    (publishClick)="saveJsonData($event)" 
    (previewClick)="previewTemplate($event)"
    (buttonClick)="buttonClick($event)"
    (aswModelChange)="onSelectionChange($event)">
</asw-form-builder>
```
Preview Template, use the component selector in your HTML page:
```
<asw-preview-template [formContainer]="jsonData" 
    (buttonClick)="buttonClick($event)"
    (aswModelChange)="onSelectionChange($event)">
</asw-preview-template>
```

Define in your component to get published event :

```
export class AppComponent {
    title = 'ASW Form Builder Demo';
    jsonData: any[] = [];
    jsonData1: any[] = [];
    isShowPreviewButton = false;
    isShowJsonDataButton = true;
    isShowPublishButton = false;
    
    // Publish Template
    saveJsonData(data: any){
        //.... 
        console.log(data);
        // do something
    }
    
    //Preview Template
    previewTemplate(data: any){
        this.jsonData = data;
    }

    buttonClick(data: any): void {
        console.log(data);
    }

    onSelectionChange(control: any): void {
        console.log(control);
    }
}
```
## Theme
Angular Material [more information](https://material.angular.io/components/categories) 
and Bootstrap [more information](https://getbootstrap.com/docs/4.0/getting-started/theming/)

## List of Controls available
| controls        | description                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Header          | Headings are defined with the `<h1> to <h6>` tags. Used as a title of the post, template and resume, etc.       |
| Image Upload    | Upload image with crop, zoom in, zoom out, reset, rotate, swap etc. features.                                   |
| Autocomplete    | The autocomplete is a normal text input enhanced by a panel of suggested relevant options as the user types.    |
| Text field      | Enable native inputs to be used within a form field. The styles such as the underline, floating label.          |
| Text area       | Enable native inputs to be used within a form field. The styles such as the underline, floating label.          |
| Datepicker      | The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar. |
| Select          | Allows the user to select only one option using dropdown.                                                       |
| Multi select    | Allows the user to select one or more options using dropdown.                                                   |
| Radio button    | Allows the user to select only one option from a group.                                                         |
| Checkbox button | Use multi select check box or single checkbox and captures boolean input with an optional indeterminate mode.   |
| Button          | Angular Material interactive button with a range of presentation options.                                       |
| Paragraph       | Paragraphs are the building blocks of papers.                                                                   |
| Divider         | Create a horizontal or vertical line styled with a Angular Material theme                                       |
| Slide toggle    | Is an on/off control that can be toggled via clicking and draggable switch.                                     |
| Grid            | Configure bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content.   |
| GPS             | Add google map key in [index.html](https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/src/index.html) file to use GPS feature.|
| QR Code         | ASW QR Code library for generating QR Code for Angular projects. [Readme](https://github.com/asoftwareworld/asw-qr-code/blob/main/README.md) file to use feature.|
| Signature       | This control allow for digital signature and display the result. (Uses canvas & fabric.js).|
| Image Drawing   | This control allow to draw on Image and display the result. (Uses canvas & fabric.js).|


## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | 
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | 
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                                                                                                                                                    |
## [Report a bug](https://github.com/asoftwareworld/ASW-Form-Builder/issues)
We use GitHub Issues as the official bug tracker for the ASW Form Builder. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the ASW Form Builder.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions
If you have questions or need help please email `asoftwareworld@gmail.com`

## License
[MIT](https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/LICENSE)

## Social Media

Twitter: <https://twitter.com/asoftwareworld>

LinkedIn: <https://in.linkedin.com/company/asoftwareworld>

Facebook: <https://www.facebook.com/asoftwaresworld>

(https://github.com/asoftwareworld/ASW-Form-Builder)

**Love ASW Form Builder? Give our repo a star :star: :arrow_up:.**

## Donate
<a href="https://ko-fi.com/anishsharma"><img src="blue.svg" height="40"></a>  
If this project help you reduce time to develop, you can give me a cup of coffee :)
