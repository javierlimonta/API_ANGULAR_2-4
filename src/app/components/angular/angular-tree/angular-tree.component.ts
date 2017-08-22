import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';

import {TreeNode, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions, TreeComponent} from 'angular-tree-component';

@Component({
  selector: 'app-angular-tree',
  templateUrl: './angular-tree.component.html',
  styles: []
})
export class AngularTreeComponent implements OnInit {
  @ViewChild('tree') treeComponent: TreeComponent;
  asyncChildren = [
    {
      id: 9,
      name: 'asyncNode'
    }
  ];
  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'isExpanded',
    idField: 'id',
    actionMapping: {
      keys: {
        40: (tree) => {
          console.log(tree);
        },
        [KEYS.UP]: TREE_ACTIONS.PREVIOUS_NODE
      },
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        click: (tree, node, $event) => {
          console.log(node.path);
          console.log(node.parent);
          console.log(node.level);
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    getChildren: (node: TreeNode) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.asyncChildren.map((c) => {
          return Object.assign({}, c, {
            hasChildren: false
          });
        })), 5000);
      });

    },
    useVirtualScroll: false,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }
  nodes = [
    {
      id: 1,
      name: 'root1',
      checked: true,
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4, checked: true,
      name: 'root2',
      isExpanded: true,
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub', hasChildren: true}
          ]
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.treeComponent);
  }

  filtrar(valor: string): void {
    this.treeComponent.treeModel.filterNodes(valor, true);
  }

  toggleExpanded(event: any) {
    console.log('PATH=> ' + event.node.path);
  }

  eventDispatch(event: any) {
    // console.log(event);
  }

  go(event: any) {
    // console.log(event);
  }

  public check(node, checked) {
    this.updateChildNodeCheckbox(node, checked);
    this.updateParentNodeCheckbox(node.realParent);
  }

  public updateChildNodeCheckbox(node, checked) {
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
    }
  }

  public updateParentNodeCheckbox(node) {
    if (!node) {
      return;
    }

    let allChildrenChecked = true;
    let noChildChecked = true;

    for (const child of node.children) {
      if (!child.data.checked || child.data.indeterminate) {
        allChildrenChecked = false;
      }
      if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildrenChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    } else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    } else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodeCheckbox(node.parent);
  }

}
