export class Task {
    public text: string;
    public done: boolean;
    public creation_date: number;
    public user_id: string;

    constructor (text:string, done: boolean, creation_date: number, user_id: string) {
        this.text = text;
        this.done = done;
        this.creation_date = creation_date;
        this.user_id = user_id;
    }
}