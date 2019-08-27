import { observable, computed, action } from "mobx";

export default class AppStore {
    @observable storages: any = { 
        showMenus: false,
        title: ''
    }

    @computed get getMenus(): boolean {
        return this.storages.showMenus;
    }

    @computed get getTitle(): boolean {
        return this.storages.title;
    }

    @action setMenus(state: boolean): void {
        this.storages.showMenus = state;
    }

    @action setTitle(state: string): void {
        this.storages.title = state;
    }
}

const appStore = new AppStore();
export {appStore}