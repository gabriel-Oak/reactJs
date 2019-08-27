import { observable, computed, action } from "mobx";

export default class AppStore {
    @observable storages: any = { 
        showMenus: false
    }

    @computed get getMenus(): boolean {
        return this.storages.showMenus;
    }

    @action setMenus(state: boolean): void {
        console.log(this.storages.showMenus);
        this.storages.showMenus = state;
    }
}

const appStore = new AppStore();
export {appStore}