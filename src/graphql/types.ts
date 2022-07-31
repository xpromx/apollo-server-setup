/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateUserInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Country: { // root type
    code: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  CreateUserPayload: { // root type
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Country: { // field return type
    code: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  CreateUserPayload: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['CreateUserPayload']; // CreateUserPayload!
  }
  Query: { // field return type
    countries: NexusGenRootTypes['Country'][]; // [Country!]!
    countryById: NexusGenRootTypes['Country'] | null; // Country
    hello: string | null; // String
    me: NexusGenRootTypes['User']; // User!
    userById: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    fullName: string; // String!
    id: number; // Int!
    lastName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Country: { // field return type name
    code: 'String'
    id: 'Int'
    name: 'String'
  }
  CreateUserPayload: { // field return type name
    user: 'User'
  }
  Mutation: { // field return type name
    createUser: 'CreateUserPayload'
  }
  Query: { // field return type name
    countries: 'Country'
    countryById: 'Country'
    hello: 'String'
    me: 'User'
    userById: 'User'
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    fullName: 'String'
    id: 'Int'
    lastName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      input: NexusGenInputs['CreateUserInput']; // CreateUserInput!
    }
  }
  Query: {
    countryById: { // args
      countryId: number; // Int!
    }
    userById: { // args
      userId: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}