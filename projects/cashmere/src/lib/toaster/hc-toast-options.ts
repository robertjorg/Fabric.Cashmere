export interface HcToastOptions {
    /** A string of header text to be included in the toast message.*/
    header?: string;
    /** The body text to be displayed in the toast message.*/
    body?: string;
    /** Sets the background color of the toast. Defaults to success.
     * Options are: `success`, `info`, `warning`, `alert`, `custom`*/
    type?: string;
    /** Position and sizing of the toaster message. Defaults to bottom-right.
     * Options are: `top-right`, `top-center`, `top-left`, `top-full-width`,
     * `bottom-right`, `bottom-center`, `bottom-left`, `bottom-full-width`.*/
    position?: string;
    /** Timeout value in milliseconds sets the amount of time the toast is displayed.
     *  Defaults to 5000. A value of 0 means the toast will not auto-dismiss.*/
    timeout?: number;
    /** When set to true, the user may click the Toast to dismiss it.  Defaults to false.*/
    clickDismiss?: boolean;
}
