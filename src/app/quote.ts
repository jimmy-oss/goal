export class Quote {
    showQuoteDetails: boolean;
    constructor(public id: number, 
        public quote: string, 
        public personSubmitting: string, 
        public quoteAuthor: string)
        {
        this.showQuoteDetails = false;
    }
}
