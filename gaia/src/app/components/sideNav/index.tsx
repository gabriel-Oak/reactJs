import React, { ReactNode } from 'react'

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


interface Props { }
interface State { }

class SideNav extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <div className="App-SideNav">
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem nodeId="1" label="Administrativo">
                        <TreeItem nodeId="2" label="Alterar cardapio" />
                        <TreeItem nodeId="3" label="Cadastro de usuário" />
                        <TreeItem nodeId="4" label="Pedidos de trocas" />
                        <TreeItem nodeId="5" label="Sugestões e bugs" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="Opções">
                        <TreeItem nodeId="6" label="Cardapios"/>
                        <TreeItem nodeId="7" label="Reportar bug/sugestão"/>
                    </TreeItem>
                </TreeView>
            </div>
        )
    }
}

export default SideNav
