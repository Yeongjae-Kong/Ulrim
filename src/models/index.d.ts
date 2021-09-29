import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Menu {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Menu, MenuMetaData>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}