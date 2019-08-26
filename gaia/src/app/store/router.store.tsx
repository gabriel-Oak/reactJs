import { RouterStore } from 'mobx-react-router';
import { action } from 'mobx';

export default class RouterStorage extends RouterStore{

    @action setHistory(path: string) {
        this.history.push(`${process.env.PUBLIC_URL}/${path}`);
    }
}

export const router = new RouterStorage();