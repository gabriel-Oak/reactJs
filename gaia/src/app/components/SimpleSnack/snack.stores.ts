import { observable, computed, action } from "mobx";

export default class SnackStore {
    @observable snack: any = { 
        state: false,
        message: '',
        class: ''
    }

    @computed get getMessage(): string {
        return this.snack.message;
    }

    @computed get getClass(): string {
        return this.snack.class;
    }

    @computed get getState(): boolean {
        return this.snack.state;
    }

    @action closeSnack(state: boolean): void {
        this.snack.state = state;
        this.snack.message = '';
    }

    @action openSnack(message: string, variant?: string): void {
        this.snack.message = message;
        this.snack.class = variant;
        this.snack.state = true;
    }
}

const snackStore = new SnackStore();
export {snackStore}