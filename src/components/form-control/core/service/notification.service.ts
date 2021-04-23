import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(public snackBar: MatSnackBar) {
    }

    /* Method used notify message to user */
    openNotification(message: string, action?: string): void {
        this.snackBar.open(message, action, {
            duration: 1000
        });
    }
}
