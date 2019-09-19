import React, { ReactNode } from 'react'

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import IconButton from '@material-ui/core/IconButton';

import './sideNav.css';

interface Props {
    toggleDrawer: any,
    drawerState: boolean
}
interface State { }

class SideNav extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    navigateTo(route: string) {
        window.location.href = process.env.PUBLIC_URL + route;
    }

    render(): ReactNode {
        return (
            <div className="App-SideNav" >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={this.props.toggleDrawer}
                    className={(this.props.drawerState ? '' : 'menuClose') + ' App-SideNav-back'}
                >
                    <i className="material-icons">
                        arrow_back
                    </i>
                </IconButton>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem nodeId="0" label="Home" onClick={() => this.navigateTo('home')} />
                    <TreeItem nodeId="1" label="Administrativo">
                        <TreeItem nodeId="2" label="Alterar cardapio" onClick={() => this.navigateTo('cardapios')} />
                        <TreeItem nodeId="3" label="Cadastro de usuário" onClick={() => this.navigateTo('usuario')} />
                        <TreeItem nodeId="4" label="Pedidos de trocas" onClick={() => this.navigateTo('trocas')} />
                        <TreeItem nodeId="5" label="Sugestões e bugs" onClick={() => this.navigateTo('feedbacks')} />
                    </TreeItem>
                    <TreeItem nodeId="6" label="Opções">
                        <TreeItem nodeId="7" label="Reportar bug/sugestão" onClick={() => this.navigateTo('feedbacks')} />
                        <TreeItem nodeId="8" label="Sugestões e bugs" />
                    </TreeItem>
                </TreeView>
            </div>
        )
    }
}

export default SideNav
