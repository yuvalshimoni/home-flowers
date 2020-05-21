/* tslint-disable */
/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  city?: Maybe<City>;
  cities?: Maybe<Array<Maybe<City>>>;
  citiesConnection?: Maybe<CityConnection>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersConnection?: Maybe<OrderConnection>;
  orderitem?: Maybe<Orderitem>;
  orderitems?: Maybe<Array<Maybe<Orderitem>>>;
  orderitemsConnection?: Maybe<OrderitemConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrdersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrderitemArgs = {
  id: Scalars['ID'];
};


export type QueryOrderitemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrderitemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  is_active: Scalars['Boolean'];
};



export type CityConnection = {
  __typename?: 'CityConnection';
  values?: Maybe<Array<Maybe<City>>>;
  groupBy?: Maybe<CityGroupBy>;
  aggregate?: Maybe<CityAggregator>;
};

export type CityGroupBy = {
  __typename?: 'CityGroupBy';
  id?: Maybe<Array<Maybe<CityConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CityConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CityConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CityConnectionName>>>;
  is_active?: Maybe<Array<Maybe<CityConnectionIs_Active>>>;
};

export type CityConnectionId = {
  __typename?: 'CityConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionCreated_At = {
  __typename?: 'CityConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionUpdated_At = {
  __typename?: 'CityConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionName = {
  __typename?: 'CityConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionIs_Active = {
  __typename?: 'CityConnectionIs_active';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CityConnection>;
};

export type CityAggregator = {
  __typename?: 'CityAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  phone: Scalars['Float'];
  deliveryDate: Scalars['Date'];
  city?: Maybe<City>;
  total: Scalars['Float'];
  orderitems?: Maybe<Array<Maybe<Orderitem>>>;
};


export type OrderOrderitemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type Orderitem = {
  __typename?: 'Orderitem';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  product?: Maybe<Product>;
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  order_id?: Maybe<Order>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  price: Scalars['Float'];
  image?: Maybe<UploadFile>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | ForgotPassword | City | CityConnection | CityAggregator | CityGroupBy | CityConnectionId | CityConnectionCreated_At | CityConnectionUpdated_At | CityConnectionName | CityConnectionIs_Active | CreateCityPayload | UpdateCityPayload | DeleteCityPayload | Order | OrderConnection | OrderAggregator | OrderAggregatorSum | OrderAggregatorAvg | OrderAggregatorMin | OrderAggregatorMax | OrderGroupBy | OrderConnectionId | OrderConnectionCreated_At | OrderConnectionUpdated_At | OrderConnectionName | OrderConnectionPhone | OrderConnectionDeliveryDate | OrderConnectionCity | OrderConnectionTotal | CreateOrderPayload | UpdateOrderPayload | DeleteOrderPayload | Orderitem | OrderitemConnection | OrderitemAggregator | OrderitemAggregatorSum | OrderitemAggregatorAvg | OrderitemAggregatorMin | OrderitemAggregatorMax | OrderitemGroupBy | OrderitemConnectionId | OrderitemConnectionCreated_At | OrderitemConnectionUpdated_At | OrderitemConnectionProduct | OrderitemConnectionPrice | OrderitemConnectionQuantity | OrderitemConnectionOrder_Id | CreateOrderitemPayload | UpdateOrderitemPayload | DeleteOrderitemPayload | Product | ProductConnection | ProductAggregator | ProductAggregatorSum | ProductAggregatorAvg | ProductAggregatorMin | ProductAggregatorMax | ProductGroupBy | ProductConnectionId | ProductConnectionCreated_At | ProductConnectionUpdated_At | ProductConnectionTitle | ProductConnectionPrice | ProductConnectionImage | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Scalars['String'];
  user: UsersPermissionsMe;
};

export type ForgotPassword = {
  __typename?: 'ForgotPassword';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateCityPayload = {
  __typename?: 'createCityPayload';
  city?: Maybe<City>;
};

export type UpdateCityPayload = {
  __typename?: 'updateCityPayload';
  city?: Maybe<City>;
};

export type DeleteCityPayload = {
  __typename?: 'deleteCityPayload';
  city?: Maybe<City>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  values?: Maybe<Array<Maybe<Order>>>;
  groupBy?: Maybe<OrderGroupBy>;
  aggregate?: Maybe<OrderAggregator>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  id?: Maybe<Array<Maybe<OrderConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<OrderConnectionName>>>;
  phone?: Maybe<Array<Maybe<OrderConnectionPhone>>>;
  deliveryDate?: Maybe<Array<Maybe<OrderConnectionDeliveryDate>>>;
  city?: Maybe<Array<Maybe<OrderConnectionCity>>>;
  total?: Maybe<Array<Maybe<OrderConnectionTotal>>>;
};

export type OrderConnectionId = {
  __typename?: 'OrderConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionCreated_At = {
  __typename?: 'OrderConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionUpdated_At = {
  __typename?: 'OrderConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionName = {
  __typename?: 'OrderConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionPhone = {
  __typename?: 'OrderConnectionPhone';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionDeliveryDate = {
  __typename?: 'OrderConnectionDeliveryDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionCity = {
  __typename?: 'OrderConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionTotal = {
  __typename?: 'OrderConnectionTotal';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderAggregator = {
  __typename?: 'OrderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrderAggregatorSum>;
  avg?: Maybe<OrderAggregatorAvg>;
  min?: Maybe<OrderAggregatorMin>;
  max?: Maybe<OrderAggregatorMax>;
};

export type OrderAggregatorSum = {
  __typename?: 'OrderAggregatorSum';
  phone?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorAvg = {
  __typename?: 'OrderAggregatorAvg';
  phone?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMin = {
  __typename?: 'OrderAggregatorMin';
  phone?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMax = {
  __typename?: 'OrderAggregatorMax';
  phone?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  order?: Maybe<Order>;
};

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload';
  order?: Maybe<Order>;
};

export type OrderitemConnection = {
  __typename?: 'OrderitemConnection';
  values?: Maybe<Array<Maybe<Orderitem>>>;
  groupBy?: Maybe<OrderitemGroupBy>;
  aggregate?: Maybe<OrderitemAggregator>;
};

export type OrderitemGroupBy = {
  __typename?: 'OrderitemGroupBy';
  id?: Maybe<Array<Maybe<OrderitemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderitemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderitemConnectionUpdated_At>>>;
  product?: Maybe<Array<Maybe<OrderitemConnectionProduct>>>;
  price?: Maybe<Array<Maybe<OrderitemConnectionPrice>>>;
  quantity?: Maybe<Array<Maybe<OrderitemConnectionQuantity>>>;
  order_id?: Maybe<Array<Maybe<OrderitemConnectionOrder_Id>>>;
};

export type OrderitemConnectionId = {
  __typename?: 'OrderitemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionCreated_At = {
  __typename?: 'OrderitemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionUpdated_At = {
  __typename?: 'OrderitemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionProduct = {
  __typename?: 'OrderitemConnectionProduct';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionPrice = {
  __typename?: 'OrderitemConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionQuantity = {
  __typename?: 'OrderitemConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemConnectionOrder_Id = {
  __typename?: 'OrderitemConnectionOrder_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderitemConnection>;
};

export type OrderitemAggregator = {
  __typename?: 'OrderitemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrderitemAggregatorSum>;
  avg?: Maybe<OrderitemAggregatorAvg>;
  min?: Maybe<OrderitemAggregatorMin>;
  max?: Maybe<OrderitemAggregatorMax>;
};

export type OrderitemAggregatorSum = {
  __typename?: 'OrderitemAggregatorSum';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderitemAggregatorAvg = {
  __typename?: 'OrderitemAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderitemAggregatorMin = {
  __typename?: 'OrderitemAggregatorMin';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderitemAggregatorMax = {
  __typename?: 'OrderitemAggregatorMax';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CreateOrderitemPayload = {
  __typename?: 'createOrderitemPayload';
  orderitem?: Maybe<Orderitem>;
};

export type UpdateOrderitemPayload = {
  __typename?: 'updateOrderitemPayload';
  orderitem?: Maybe<Orderitem>;
};

export type DeleteOrderitemPayload = {
  __typename?: 'deleteOrderitemPayload';
  orderitem?: Maybe<Orderitem>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  values?: Maybe<Array<Maybe<Product>>>;
  groupBy?: Maybe<ProductGroupBy>;
  aggregate?: Maybe<ProductAggregator>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ProductConnectionTitle>>>;
  price?: Maybe<Array<Maybe<ProductConnectionPrice>>>;
  image?: Maybe<Array<Maybe<ProductConnectionImage>>>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreated_At = {
  __typename?: 'ProductConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdated_At = {
  __typename?: 'ProductConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionTitle = {
  __typename?: 'ProductConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPrice = {
  __typename?: 'ProductConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionImage = {
  __typename?: 'ProductConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductAggregatorSum>;
  avg?: Maybe<ProductAggregatorAvg>;
  min?: Maybe<ProductAggregatorMin>;
  max?: Maybe<ProductAggregatorMax>;
};

export type ProductAggregatorSum = {
  __typename?: 'ProductAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorAvg = {
  __typename?: 'ProductAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMin = {
  __typename?: 'ProductAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMax = {
  __typename?: 'ProductAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity?: Maybe<CreateCityPayload>;
  updateCity?: Maybe<UpdateCityPayload>;
  deleteCity?: Maybe<DeleteCityPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  createOrderitem?: Maybe<CreateOrderitemPayload>;
  updateOrderitem?: Maybe<UpdateOrderitemPayload>;
  deleteOrderitem?: Maybe<DeleteOrderitemPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<ForgotPassword>;
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCityArgs = {
  input?: Maybe<CreateCityInput>;
};


export type MutationUpdateCityArgs = {
  input?: Maybe<UpdateCityInput>;
};


export type MutationDeleteCityArgs = {
  input?: Maybe<DeleteCityInput>;
};


export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>;
};


export type MutationUpdateOrderArgs = {
  input?: Maybe<UpdateOrderInput>;
};


export type MutationDeleteOrderArgs = {
  input?: Maybe<DeleteOrderInput>;
};


export type MutationCreateOrderitemArgs = {
  input?: Maybe<CreateOrderitemInput>;
};


export type MutationUpdateOrderitemArgs = {
  input?: Maybe<UpdateOrderitemInput>;
};


export type MutationDeleteOrderitemArgs = {
  input?: Maybe<DeleteOrderitemInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateCityInput = {
  data?: Maybe<CityInput>;
};

export type CityInput = {
  name: Scalars['String'];
  is_active: Scalars['Boolean'];
};

export type UpdateCityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCityInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditCityInput = {
  name?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type DeleteCityInput = {
  where?: Maybe<InputId>;
};

export type CreateOrderInput = {
  data?: Maybe<OrderInput>;
};

export type OrderInput = {
  name: Scalars['String'];
  phone: Scalars['Float'];
  deliveryDate: Scalars['Date'];
  city?: Maybe<Scalars['ID']>;
  total: Scalars['Float'];
  orderitems?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UpdateOrderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderInput>;
};

export type EditOrderInput = {
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Float']>;
  deliveryDate?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['ID']>;
  total?: Maybe<Scalars['Float']>;
  orderitems?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type DeleteOrderInput = {
  where?: Maybe<InputId>;
};

export type CreateOrderitemInput = {
  data?: Maybe<OrderitemInput>;
};

export type OrderitemInput = {
  product?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  order_id?: Maybe<Scalars['ID']>;
};

export type UpdateOrderitemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderitemInput>;
};

export type EditOrderitemInput = {
  product?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['ID']>;
};

export type DeleteOrderitemInput = {
  where?: Maybe<InputId>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type ProductInput = {
  title: Scalars['String'];
  price: Scalars['Float'];
  image?: Maybe<Scalars['ID']>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type EditProductInput = {
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['ID']>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
};



export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  City: ResolverTypeWrapper<City>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  CityConnection: ResolverTypeWrapper<CityConnection>;
  CityGroupBy: ResolverTypeWrapper<CityGroupBy>;
  CityConnectionId: ResolverTypeWrapper<CityConnectionId>;
  CityConnectionCreated_at: ResolverTypeWrapper<CityConnectionCreated_At>;
  CityConnectionUpdated_at: ResolverTypeWrapper<CityConnectionUpdated_At>;
  CityConnectionName: ResolverTypeWrapper<CityConnectionName>;
  CityConnectionIs_active: ResolverTypeWrapper<CityConnectionIs_Active>;
  CityAggregator: ResolverTypeWrapper<CityAggregator>;
  Order: ResolverTypeWrapper<Order>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Orderitem: ResolverTypeWrapper<Orderitem>;
  Product: ResolverTypeWrapper<Product>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['Morph']>>> }>;
  Morph: ResolversTypes['UsersPermissionsMe'] | ResolversTypes['UsersPermissionsMeRole'] | ResolversTypes['UsersPermissionsLoginPayload'] | ResolversTypes['ForgotPassword'] | ResolversTypes['City'] | ResolversTypes['CityConnection'] | ResolversTypes['CityAggregator'] | ResolversTypes['CityGroupBy'] | ResolversTypes['CityConnectionId'] | ResolversTypes['CityConnectionCreated_at'] | ResolversTypes['CityConnectionUpdated_at'] | ResolversTypes['CityConnectionName'] | ResolversTypes['CityConnectionIs_active'] | ResolversTypes['createCityPayload'] | ResolversTypes['updateCityPayload'] | ResolversTypes['deleteCityPayload'] | ResolversTypes['Order'] | ResolversTypes['OrderConnection'] | ResolversTypes['OrderAggregator'] | ResolversTypes['OrderAggregatorSum'] | ResolversTypes['OrderAggregatorAvg'] | ResolversTypes['OrderAggregatorMin'] | ResolversTypes['OrderAggregatorMax'] | ResolversTypes['OrderGroupBy'] | ResolversTypes['OrderConnectionId'] | ResolversTypes['OrderConnectionCreated_at'] | ResolversTypes['OrderConnectionUpdated_at'] | ResolversTypes['OrderConnectionName'] | ResolversTypes['OrderConnectionPhone'] | ResolversTypes['OrderConnectionDeliveryDate'] | ResolversTypes['OrderConnectionCity'] | ResolversTypes['OrderConnectionTotal'] | ResolversTypes['createOrderPayload'] | ResolversTypes['updateOrderPayload'] | ResolversTypes['deleteOrderPayload'] | ResolversTypes['Orderitem'] | ResolversTypes['OrderitemConnection'] | ResolversTypes['OrderitemAggregator'] | ResolversTypes['OrderitemAggregatorSum'] | ResolversTypes['OrderitemAggregatorAvg'] | ResolversTypes['OrderitemAggregatorMin'] | ResolversTypes['OrderitemAggregatorMax'] | ResolversTypes['OrderitemGroupBy'] | ResolversTypes['OrderitemConnectionId'] | ResolversTypes['OrderitemConnectionCreated_at'] | ResolversTypes['OrderitemConnectionUpdated_at'] | ResolversTypes['OrderitemConnectionProduct'] | ResolversTypes['OrderitemConnectionPrice'] | ResolversTypes['OrderitemConnectionQuantity'] | ResolversTypes['OrderitemConnectionOrder_id'] | ResolversTypes['createOrderitemPayload'] | ResolversTypes['updateOrderitemPayload'] | ResolversTypes['deleteOrderitemPayload'] | ResolversTypes['Product'] | ResolversTypes['ProductConnection'] | ResolversTypes['ProductAggregator'] | ResolversTypes['ProductAggregatorSum'] | ResolversTypes['ProductAggregatorAvg'] | ResolversTypes['ProductAggregatorMin'] | ResolversTypes['ProductAggregatorMax'] | ResolversTypes['ProductGroupBy'] | ResolversTypes['ProductConnectionId'] | ResolversTypes['ProductConnectionCreated_at'] | ResolversTypes['ProductConnectionUpdated_at'] | ResolversTypes['ProductConnectionTitle'] | ResolversTypes['ProductConnectionPrice'] | ResolversTypes['ProductConnectionImage'] | ResolversTypes['createProductPayload'] | ResolversTypes['updateProductPayload'] | ResolversTypes['deleteProductPayload'] | ResolversTypes['UploadFile'] | ResolversTypes['UploadFileConnection'] | ResolversTypes['UploadFileAggregator'] | ResolversTypes['UploadFileAggregatorSum'] | ResolversTypes['UploadFileAggregatorAvg'] | ResolversTypes['UploadFileAggregatorMin'] | ResolversTypes['UploadFileAggregatorMax'] | ResolversTypes['UploadFileGroupBy'] | ResolversTypes['UploadFileConnectionId'] | ResolversTypes['UploadFileConnectionCreated_at'] | ResolversTypes['UploadFileConnectionUpdated_at'] | ResolversTypes['UploadFileConnectionName'] | ResolversTypes['UploadFileConnectionAlternativeText'] | ResolversTypes['UploadFileConnectionCaption'] | ResolversTypes['UploadFileConnectionWidth'] | ResolversTypes['UploadFileConnectionHeight'] | ResolversTypes['UploadFileConnectionFormats'] | ResolversTypes['UploadFileConnectionHash'] | ResolversTypes['UploadFileConnectionExt'] | ResolversTypes['UploadFileConnectionMime'] | ResolversTypes['UploadFileConnectionSize'] | ResolversTypes['UploadFileConnectionUrl'] | ResolversTypes['UploadFileConnectionPreviewUrl'] | ResolversTypes['UploadFileConnectionProvider'] | ResolversTypes['UploadFileConnectionProvider_metadata'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsRoleConnection'] | ResolversTypes['UsersPermissionsRoleAggregator'] | ResolversTypes['UsersPermissionsRoleGroupBy'] | ResolversTypes['UsersPermissionsRoleConnectionId'] | ResolversTypes['UsersPermissionsRoleConnectionName'] | ResolversTypes['UsersPermissionsRoleConnectionDescription'] | ResolversTypes['UsersPermissionsRoleConnectionType'] | ResolversTypes['createRolePayload'] | ResolversTypes['updateRolePayload'] | ResolversTypes['deleteRolePayload'] | ResolversTypes['UsersPermissionsUser'] | ResolversTypes['UsersPermissionsUserConnection'] | ResolversTypes['UsersPermissionsUserAggregator'] | ResolversTypes['UsersPermissionsUserGroupBy'] | ResolversTypes['UsersPermissionsUserConnectionId'] | ResolversTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversTypes['UsersPermissionsUserConnectionUsername'] | ResolversTypes['UsersPermissionsUserConnectionEmail'] | ResolversTypes['UsersPermissionsUserConnectionProvider'] | ResolversTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversTypes['UsersPermissionsUserConnectionBlocked'] | ResolversTypes['UsersPermissionsUserConnectionRole'] | ResolversTypes['createUserPayload'] | ResolversTypes['updateUserPayload'] | ResolversTypes['deleteUserPayload'];
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  ForgotPassword: ResolverTypeWrapper<ForgotPassword>;
  createCityPayload: ResolverTypeWrapper<CreateCityPayload>;
  updateCityPayload: ResolverTypeWrapper<UpdateCityPayload>;
  deleteCityPayload: ResolverTypeWrapper<DeleteCityPayload>;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderGroupBy: ResolverTypeWrapper<OrderGroupBy>;
  OrderConnectionId: ResolverTypeWrapper<OrderConnectionId>;
  OrderConnectionCreated_at: ResolverTypeWrapper<OrderConnectionCreated_At>;
  OrderConnectionUpdated_at: ResolverTypeWrapper<OrderConnectionUpdated_At>;
  OrderConnectionName: ResolverTypeWrapper<OrderConnectionName>;
  OrderConnectionPhone: ResolverTypeWrapper<OrderConnectionPhone>;
  OrderConnectionDeliveryDate: ResolverTypeWrapper<OrderConnectionDeliveryDate>;
  OrderConnectionCity: ResolverTypeWrapper<OrderConnectionCity>;
  OrderConnectionTotal: ResolverTypeWrapper<OrderConnectionTotal>;
  OrderAggregator: ResolverTypeWrapper<OrderAggregator>;
  OrderAggregatorSum: ResolverTypeWrapper<OrderAggregatorSum>;
  OrderAggregatorAvg: ResolverTypeWrapper<OrderAggregatorAvg>;
  OrderAggregatorMin: ResolverTypeWrapper<OrderAggregatorMin>;
  OrderAggregatorMax: ResolverTypeWrapper<OrderAggregatorMax>;
  createOrderPayload: ResolverTypeWrapper<CreateOrderPayload>;
  updateOrderPayload: ResolverTypeWrapper<UpdateOrderPayload>;
  deleteOrderPayload: ResolverTypeWrapper<DeleteOrderPayload>;
  OrderitemConnection: ResolverTypeWrapper<OrderitemConnection>;
  OrderitemGroupBy: ResolverTypeWrapper<OrderitemGroupBy>;
  OrderitemConnectionId: ResolverTypeWrapper<OrderitemConnectionId>;
  OrderitemConnectionCreated_at: ResolverTypeWrapper<OrderitemConnectionCreated_At>;
  OrderitemConnectionUpdated_at: ResolverTypeWrapper<OrderitemConnectionUpdated_At>;
  OrderitemConnectionProduct: ResolverTypeWrapper<OrderitemConnectionProduct>;
  OrderitemConnectionPrice: ResolverTypeWrapper<OrderitemConnectionPrice>;
  OrderitemConnectionQuantity: ResolverTypeWrapper<OrderitemConnectionQuantity>;
  OrderitemConnectionOrder_id: ResolverTypeWrapper<OrderitemConnectionOrder_Id>;
  OrderitemAggregator: ResolverTypeWrapper<OrderitemAggregator>;
  OrderitemAggregatorSum: ResolverTypeWrapper<OrderitemAggregatorSum>;
  OrderitemAggregatorAvg: ResolverTypeWrapper<OrderitemAggregatorAvg>;
  OrderitemAggregatorMin: ResolverTypeWrapper<OrderitemAggregatorMin>;
  OrderitemAggregatorMax: ResolverTypeWrapper<OrderitemAggregatorMax>;
  createOrderitemPayload: ResolverTypeWrapper<CreateOrderitemPayload>;
  updateOrderitemPayload: ResolverTypeWrapper<UpdateOrderitemPayload>;
  deleteOrderitemPayload: ResolverTypeWrapper<DeleteOrderitemPayload>;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductGroupBy: ResolverTypeWrapper<ProductGroupBy>;
  ProductConnectionId: ResolverTypeWrapper<ProductConnectionId>;
  ProductConnectionCreated_at: ResolverTypeWrapper<ProductConnectionCreated_At>;
  ProductConnectionUpdated_at: ResolverTypeWrapper<ProductConnectionUpdated_At>;
  ProductConnectionTitle: ResolverTypeWrapper<ProductConnectionTitle>;
  ProductConnectionPrice: ResolverTypeWrapper<ProductConnectionPrice>;
  ProductConnectionImage: ResolverTypeWrapper<ProductConnectionImage>;
  ProductAggregator: ResolverTypeWrapper<ProductAggregator>;
  ProductAggregatorSum: ResolverTypeWrapper<ProductAggregatorSum>;
  ProductAggregatorAvg: ResolverTypeWrapper<ProductAggregatorAvg>;
  ProductAggregatorMin: ResolverTypeWrapper<ProductAggregatorMin>;
  ProductAggregatorMax: ResolverTypeWrapper<ProductAggregatorMax>;
  createProductPayload: ResolverTypeWrapper<CreateProductPayload>;
  updateProductPayload: ResolverTypeWrapper<UpdateProductPayload>;
  deleteProductPayload: ResolverTypeWrapper<DeleteProductPayload>;
  UploadFileConnection: ResolverTypeWrapper<UploadFileConnection>;
  UploadFileGroupBy: ResolverTypeWrapper<UploadFileGroupBy>;
  UploadFileConnectionId: ResolverTypeWrapper<UploadFileConnectionId>;
  UploadFileConnectionCreated_at: ResolverTypeWrapper<UploadFileConnectionCreated_At>;
  UploadFileConnectionUpdated_at: ResolverTypeWrapper<UploadFileConnectionUpdated_At>;
  UploadFileConnectionName: ResolverTypeWrapper<UploadFileConnectionName>;
  UploadFileConnectionAlternativeText: ResolverTypeWrapper<UploadFileConnectionAlternativeText>;
  UploadFileConnectionCaption: ResolverTypeWrapper<UploadFileConnectionCaption>;
  UploadFileConnectionWidth: ResolverTypeWrapper<UploadFileConnectionWidth>;
  UploadFileConnectionHeight: ResolverTypeWrapper<UploadFileConnectionHeight>;
  UploadFileConnectionFormats: ResolverTypeWrapper<UploadFileConnectionFormats>;
  UploadFileConnectionHash: ResolverTypeWrapper<UploadFileConnectionHash>;
  UploadFileConnectionExt: ResolverTypeWrapper<UploadFileConnectionExt>;
  UploadFileConnectionMime: ResolverTypeWrapper<UploadFileConnectionMime>;
  UploadFileConnectionSize: ResolverTypeWrapper<UploadFileConnectionSize>;
  UploadFileConnectionUrl: ResolverTypeWrapper<UploadFileConnectionUrl>;
  UploadFileConnectionPreviewUrl: ResolverTypeWrapper<UploadFileConnectionPreviewUrl>;
  UploadFileConnectionProvider: ResolverTypeWrapper<UploadFileConnectionProvider>;
  UploadFileConnectionProvider_metadata: ResolverTypeWrapper<UploadFileConnectionProvider_Metadata>;
  UploadFileAggregator: ResolverTypeWrapper<UploadFileAggregator>;
  UploadFileAggregatorSum: ResolverTypeWrapper<UploadFileAggregatorSum>;
  UploadFileAggregatorAvg: ResolverTypeWrapper<UploadFileAggregatorAvg>;
  UploadFileAggregatorMin: ResolverTypeWrapper<UploadFileAggregatorMin>;
  UploadFileAggregatorMax: ResolverTypeWrapper<UploadFileAggregatorMax>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsRoleConnection: ResolverTypeWrapper<UsersPermissionsRoleConnection>;
  UsersPermissionsRoleGroupBy: ResolverTypeWrapper<UsersPermissionsRoleGroupBy>;
  UsersPermissionsRoleConnectionId: ResolverTypeWrapper<UsersPermissionsRoleConnectionId>;
  UsersPermissionsRoleConnectionName: ResolverTypeWrapper<UsersPermissionsRoleConnectionName>;
  UsersPermissionsRoleConnectionDescription: ResolverTypeWrapper<UsersPermissionsRoleConnectionDescription>;
  UsersPermissionsRoleConnectionType: ResolverTypeWrapper<UsersPermissionsRoleConnectionType>;
  UsersPermissionsRoleAggregator: ResolverTypeWrapper<UsersPermissionsRoleAggregator>;
  createRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  updateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  deleteRolePayload: ResolverTypeWrapper<DeleteRolePayload>;
  UsersPermissionsUserConnection: ResolverTypeWrapper<UsersPermissionsUserConnection>;
  UsersPermissionsUserGroupBy: ResolverTypeWrapper<UsersPermissionsUserGroupBy>;
  UsersPermissionsUserConnectionId: ResolverTypeWrapper<UsersPermissionsUserConnectionId>;
  UsersPermissionsUserConnectionCreated_at: ResolverTypeWrapper<UsersPermissionsUserConnectionCreated_At>;
  UsersPermissionsUserConnectionUpdated_at: ResolverTypeWrapper<UsersPermissionsUserConnectionUpdated_At>;
  UsersPermissionsUserConnectionUsername: ResolverTypeWrapper<UsersPermissionsUserConnectionUsername>;
  UsersPermissionsUserConnectionEmail: ResolverTypeWrapper<UsersPermissionsUserConnectionEmail>;
  UsersPermissionsUserConnectionProvider: ResolverTypeWrapper<UsersPermissionsUserConnectionProvider>;
  UsersPermissionsUserConnectionConfirmed: ResolverTypeWrapper<UsersPermissionsUserConnectionConfirmed>;
  UsersPermissionsUserConnectionBlocked: ResolverTypeWrapper<UsersPermissionsUserConnectionBlocked>;
  UsersPermissionsUserConnectionRole: ResolverTypeWrapper<UsersPermissionsUserConnectionRole>;
  UsersPermissionsUserAggregator: ResolverTypeWrapper<UsersPermissionsUserAggregator>;
  createUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  updateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  deleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  createCityInput: CreateCityInput;
  CityInput: CityInput;
  updateCityInput: UpdateCityInput;
  InputID: InputId;
  editCityInput: EditCityInput;
  deleteCityInput: DeleteCityInput;
  createOrderInput: CreateOrderInput;
  OrderInput: OrderInput;
  updateOrderInput: UpdateOrderInput;
  editOrderInput: EditOrderInput;
  deleteOrderInput: DeleteOrderInput;
  createOrderitemInput: CreateOrderitemInput;
  OrderitemInput: OrderitemInput;
  updateOrderitemInput: UpdateOrderitemInput;
  editOrderitemInput: EditOrderitemInput;
  deleteOrderitemInput: DeleteOrderitemInput;
  createProductInput: CreateProductInput;
  ProductInput: ProductInput;
  updateProductInput: UpdateProductInput;
  editProductInput: EditProductInput;
  deleteProductInput: DeleteProductInput;
  createRoleInput: CreateRoleInput;
  RoleInput: RoleInput;
  updateRoleInput: UpdateRoleInput;
  editRoleInput: EditRoleInput;
  deleteRoleInput: DeleteRoleInput;
  createUserInput: CreateUserInput;
  UserInput: UserInput;
  updateUserInput: UpdateUserInput;
  editUserInput: EditUserInput;
  deleteUserInput: DeleteUserInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  FileInput: FileInput;
  editFileInput: EditFileInput;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  CacheControlScope: CacheControlScope;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  City: City;
  DateTime: Scalars['DateTime'];
  JSON: Scalars['JSON'];
  CityConnection: CityConnection;
  CityGroupBy: CityGroupBy;
  CityConnectionId: CityConnectionId;
  CityConnectionCreated_at: CityConnectionCreated_At;
  CityConnectionUpdated_at: CityConnectionUpdated_At;
  CityConnectionName: CityConnectionName;
  CityConnectionIs_active: CityConnectionIs_Active;
  CityAggregator: CityAggregator;
  Order: Order;
  Float: Scalars['Float'];
  Date: Scalars['Date'];
  Orderitem: Orderitem;
  Product: Product;
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['Morph']>>> };
  Morph: ResolversParentTypes['UsersPermissionsMe'] | ResolversParentTypes['UsersPermissionsMeRole'] | ResolversParentTypes['UsersPermissionsLoginPayload'] | ResolversParentTypes['ForgotPassword'] | ResolversParentTypes['City'] | ResolversParentTypes['CityConnection'] | ResolversParentTypes['CityAggregator'] | ResolversParentTypes['CityGroupBy'] | ResolversParentTypes['CityConnectionId'] | ResolversParentTypes['CityConnectionCreated_at'] | ResolversParentTypes['CityConnectionUpdated_at'] | ResolversParentTypes['CityConnectionName'] | ResolversParentTypes['CityConnectionIs_active'] | ResolversParentTypes['createCityPayload'] | ResolversParentTypes['updateCityPayload'] | ResolversParentTypes['deleteCityPayload'] | ResolversParentTypes['Order'] | ResolversParentTypes['OrderConnection'] | ResolversParentTypes['OrderAggregator'] | ResolversParentTypes['OrderAggregatorSum'] | ResolversParentTypes['OrderAggregatorAvg'] | ResolversParentTypes['OrderAggregatorMin'] | ResolversParentTypes['OrderAggregatorMax'] | ResolversParentTypes['OrderGroupBy'] | ResolversParentTypes['OrderConnectionId'] | ResolversParentTypes['OrderConnectionCreated_at'] | ResolversParentTypes['OrderConnectionUpdated_at'] | ResolversParentTypes['OrderConnectionName'] | ResolversParentTypes['OrderConnectionPhone'] | ResolversParentTypes['OrderConnectionDeliveryDate'] | ResolversParentTypes['OrderConnectionCity'] | ResolversParentTypes['OrderConnectionTotal'] | ResolversParentTypes['createOrderPayload'] | ResolversParentTypes['updateOrderPayload'] | ResolversParentTypes['deleteOrderPayload'] | ResolversParentTypes['Orderitem'] | ResolversParentTypes['OrderitemConnection'] | ResolversParentTypes['OrderitemAggregator'] | ResolversParentTypes['OrderitemAggregatorSum'] | ResolversParentTypes['OrderitemAggregatorAvg'] | ResolversParentTypes['OrderitemAggregatorMin'] | ResolversParentTypes['OrderitemAggregatorMax'] | ResolversParentTypes['OrderitemGroupBy'] | ResolversParentTypes['OrderitemConnectionId'] | ResolversParentTypes['OrderitemConnectionCreated_at'] | ResolversParentTypes['OrderitemConnectionUpdated_at'] | ResolversParentTypes['OrderitemConnectionProduct'] | ResolversParentTypes['OrderitemConnectionPrice'] | ResolversParentTypes['OrderitemConnectionQuantity'] | ResolversParentTypes['OrderitemConnectionOrder_id'] | ResolversParentTypes['createOrderitemPayload'] | ResolversParentTypes['updateOrderitemPayload'] | ResolversParentTypes['deleteOrderitemPayload'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductConnection'] | ResolversParentTypes['ProductAggregator'] | ResolversParentTypes['ProductAggregatorSum'] | ResolversParentTypes['ProductAggregatorAvg'] | ResolversParentTypes['ProductAggregatorMin'] | ResolversParentTypes['ProductAggregatorMax'] | ResolversParentTypes['ProductGroupBy'] | ResolversParentTypes['ProductConnectionId'] | ResolversParentTypes['ProductConnectionCreated_at'] | ResolversParentTypes['ProductConnectionUpdated_at'] | ResolversParentTypes['ProductConnectionTitle'] | ResolversParentTypes['ProductConnectionPrice'] | ResolversParentTypes['ProductConnectionImage'] | ResolversParentTypes['createProductPayload'] | ResolversParentTypes['updateProductPayload'] | ResolversParentTypes['deleteProductPayload'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['UploadFileConnection'] | ResolversParentTypes['UploadFileAggregator'] | ResolversParentTypes['UploadFileAggregatorSum'] | ResolversParentTypes['UploadFileAggregatorAvg'] | ResolversParentTypes['UploadFileAggregatorMin'] | ResolversParentTypes['UploadFileAggregatorMax'] | ResolversParentTypes['UploadFileGroupBy'] | ResolversParentTypes['UploadFileConnectionId'] | ResolversParentTypes['UploadFileConnectionCreated_at'] | ResolversParentTypes['UploadFileConnectionUpdated_at'] | ResolversParentTypes['UploadFileConnectionName'] | ResolversParentTypes['UploadFileConnectionAlternativeText'] | ResolversParentTypes['UploadFileConnectionCaption'] | ResolversParentTypes['UploadFileConnectionWidth'] | ResolversParentTypes['UploadFileConnectionHeight'] | ResolversParentTypes['UploadFileConnectionFormats'] | ResolversParentTypes['UploadFileConnectionHash'] | ResolversParentTypes['UploadFileConnectionExt'] | ResolversParentTypes['UploadFileConnectionMime'] | ResolversParentTypes['UploadFileConnectionSize'] | ResolversParentTypes['UploadFileConnectionUrl'] | ResolversParentTypes['UploadFileConnectionPreviewUrl'] | ResolversParentTypes['UploadFileConnectionProvider'] | ResolversParentTypes['UploadFileConnectionProvider_metadata'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsRoleConnection'] | ResolversParentTypes['UsersPermissionsRoleAggregator'] | ResolversParentTypes['UsersPermissionsRoleGroupBy'] | ResolversParentTypes['UsersPermissionsRoleConnectionId'] | ResolversParentTypes['UsersPermissionsRoleConnectionName'] | ResolversParentTypes['UsersPermissionsRoleConnectionDescription'] | ResolversParentTypes['UsersPermissionsRoleConnectionType'] | ResolversParentTypes['createRolePayload'] | ResolversParentTypes['updateRolePayload'] | ResolversParentTypes['deleteRolePayload'] | ResolversParentTypes['UsersPermissionsUser'] | ResolversParentTypes['UsersPermissionsUserConnection'] | ResolversParentTypes['UsersPermissionsUserAggregator'] | ResolversParentTypes['UsersPermissionsUserGroupBy'] | ResolversParentTypes['UsersPermissionsUserConnectionId'] | ResolversParentTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUsername'] | ResolversParentTypes['UsersPermissionsUserConnectionEmail'] | ResolversParentTypes['UsersPermissionsUserConnectionProvider'] | ResolversParentTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversParentTypes['UsersPermissionsUserConnectionBlocked'] | ResolversParentTypes['UsersPermissionsUserConnectionRole'] | ResolversParentTypes['createUserPayload'] | ResolversParentTypes['updateUserPayload'] | ResolversParentTypes['deleteUserPayload'];
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  ForgotPassword: ForgotPassword;
  createCityPayload: CreateCityPayload;
  updateCityPayload: UpdateCityPayload;
  deleteCityPayload: DeleteCityPayload;
  OrderConnection: OrderConnection;
  OrderGroupBy: OrderGroupBy;
  OrderConnectionId: OrderConnectionId;
  OrderConnectionCreated_at: OrderConnectionCreated_At;
  OrderConnectionUpdated_at: OrderConnectionUpdated_At;
  OrderConnectionName: OrderConnectionName;
  OrderConnectionPhone: OrderConnectionPhone;
  OrderConnectionDeliveryDate: OrderConnectionDeliveryDate;
  OrderConnectionCity: OrderConnectionCity;
  OrderConnectionTotal: OrderConnectionTotal;
  OrderAggregator: OrderAggregator;
  OrderAggregatorSum: OrderAggregatorSum;
  OrderAggregatorAvg: OrderAggregatorAvg;
  OrderAggregatorMin: OrderAggregatorMin;
  OrderAggregatorMax: OrderAggregatorMax;
  createOrderPayload: CreateOrderPayload;
  updateOrderPayload: UpdateOrderPayload;
  deleteOrderPayload: DeleteOrderPayload;
  OrderitemConnection: OrderitemConnection;
  OrderitemGroupBy: OrderitemGroupBy;
  OrderitemConnectionId: OrderitemConnectionId;
  OrderitemConnectionCreated_at: OrderitemConnectionCreated_At;
  OrderitemConnectionUpdated_at: OrderitemConnectionUpdated_At;
  OrderitemConnectionProduct: OrderitemConnectionProduct;
  OrderitemConnectionPrice: OrderitemConnectionPrice;
  OrderitemConnectionQuantity: OrderitemConnectionQuantity;
  OrderitemConnectionOrder_id: OrderitemConnectionOrder_Id;
  OrderitemAggregator: OrderitemAggregator;
  OrderitemAggregatorSum: OrderitemAggregatorSum;
  OrderitemAggregatorAvg: OrderitemAggregatorAvg;
  OrderitemAggregatorMin: OrderitemAggregatorMin;
  OrderitemAggregatorMax: OrderitemAggregatorMax;
  createOrderitemPayload: CreateOrderitemPayload;
  updateOrderitemPayload: UpdateOrderitemPayload;
  deleteOrderitemPayload: DeleteOrderitemPayload;
  ProductConnection: ProductConnection;
  ProductGroupBy: ProductGroupBy;
  ProductConnectionId: ProductConnectionId;
  ProductConnectionCreated_at: ProductConnectionCreated_At;
  ProductConnectionUpdated_at: ProductConnectionUpdated_At;
  ProductConnectionTitle: ProductConnectionTitle;
  ProductConnectionPrice: ProductConnectionPrice;
  ProductConnectionImage: ProductConnectionImage;
  ProductAggregator: ProductAggregator;
  ProductAggregatorSum: ProductAggregatorSum;
  ProductAggregatorAvg: ProductAggregatorAvg;
  ProductAggregatorMin: ProductAggregatorMin;
  ProductAggregatorMax: ProductAggregatorMax;
  createProductPayload: CreateProductPayload;
  updateProductPayload: UpdateProductPayload;
  deleteProductPayload: DeleteProductPayload;
  UploadFileConnection: UploadFileConnection;
  UploadFileGroupBy: UploadFileGroupBy;
  UploadFileConnectionId: UploadFileConnectionId;
  UploadFileConnectionCreated_at: UploadFileConnectionCreated_At;
  UploadFileConnectionUpdated_at: UploadFileConnectionUpdated_At;
  UploadFileConnectionName: UploadFileConnectionName;
  UploadFileConnectionAlternativeText: UploadFileConnectionAlternativeText;
  UploadFileConnectionCaption: UploadFileConnectionCaption;
  UploadFileConnectionWidth: UploadFileConnectionWidth;
  UploadFileConnectionHeight: UploadFileConnectionHeight;
  UploadFileConnectionFormats: UploadFileConnectionFormats;
  UploadFileConnectionHash: UploadFileConnectionHash;
  UploadFileConnectionExt: UploadFileConnectionExt;
  UploadFileConnectionMime: UploadFileConnectionMime;
  UploadFileConnectionSize: UploadFileConnectionSize;
  UploadFileConnectionUrl: UploadFileConnectionUrl;
  UploadFileConnectionPreviewUrl: UploadFileConnectionPreviewUrl;
  UploadFileConnectionProvider: UploadFileConnectionProvider;
  UploadFileConnectionProvider_metadata: UploadFileConnectionProvider_Metadata;
  UploadFileAggregator: UploadFileAggregator;
  UploadFileAggregatorSum: UploadFileAggregatorSum;
  UploadFileAggregatorAvg: UploadFileAggregatorAvg;
  UploadFileAggregatorMin: UploadFileAggregatorMin;
  UploadFileAggregatorMax: UploadFileAggregatorMax;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsRoleConnection: UsersPermissionsRoleConnection;
  UsersPermissionsRoleGroupBy: UsersPermissionsRoleGroupBy;
  UsersPermissionsRoleConnectionId: UsersPermissionsRoleConnectionId;
  UsersPermissionsRoleConnectionName: UsersPermissionsRoleConnectionName;
  UsersPermissionsRoleConnectionDescription: UsersPermissionsRoleConnectionDescription;
  UsersPermissionsRoleConnectionType: UsersPermissionsRoleConnectionType;
  UsersPermissionsRoleAggregator: UsersPermissionsRoleAggregator;
  createRolePayload: CreateRolePayload;
  updateRolePayload: UpdateRolePayload;
  deleteRolePayload: DeleteRolePayload;
  UsersPermissionsUserConnection: UsersPermissionsUserConnection;
  UsersPermissionsUserGroupBy: UsersPermissionsUserGroupBy;
  UsersPermissionsUserConnectionId: UsersPermissionsUserConnectionId;
  UsersPermissionsUserConnectionCreated_at: UsersPermissionsUserConnectionCreated_At;
  UsersPermissionsUserConnectionUpdated_at: UsersPermissionsUserConnectionUpdated_At;
  UsersPermissionsUserConnectionUsername: UsersPermissionsUserConnectionUsername;
  UsersPermissionsUserConnectionEmail: UsersPermissionsUserConnectionEmail;
  UsersPermissionsUserConnectionProvider: UsersPermissionsUserConnectionProvider;
  UsersPermissionsUserConnectionConfirmed: UsersPermissionsUserConnectionConfirmed;
  UsersPermissionsUserConnectionBlocked: UsersPermissionsUserConnectionBlocked;
  UsersPermissionsUserConnectionRole: UsersPermissionsUserConnectionRole;
  UsersPermissionsUserAggregator: UsersPermissionsUserAggregator;
  createUserPayload: CreateUserPayload;
  updateUserPayload: UpdateUserPayload;
  deleteUserPayload: DeleteUserPayload;
  Mutation: {};
  createCityInput: CreateCityInput;
  CityInput: CityInput;
  updateCityInput: UpdateCityInput;
  InputID: InputId;
  editCityInput: EditCityInput;
  deleteCityInput: DeleteCityInput;
  createOrderInput: CreateOrderInput;
  OrderInput: OrderInput;
  updateOrderInput: UpdateOrderInput;
  editOrderInput: EditOrderInput;
  deleteOrderInput: DeleteOrderInput;
  createOrderitemInput: CreateOrderitemInput;
  OrderitemInput: OrderitemInput;
  updateOrderitemInput: UpdateOrderitemInput;
  editOrderitemInput: EditOrderitemInput;
  deleteOrderitemInput: DeleteOrderitemInput;
  createProductInput: CreateProductInput;
  ProductInput: ProductInput;
  updateProductInput: UpdateProductInput;
  editProductInput: EditProductInput;
  deleteProductInput: DeleteProductInput;
  createRoleInput: CreateRoleInput;
  RoleInput: RoleInput;
  updateRoleInput: UpdateRoleInput;
  editRoleInput: EditRoleInput;
  deleteRoleInput: DeleteRoleInput;
  createUserInput: CreateUserInput;
  UserInput: UserInput;
  updateUserInput: UpdateUserInput;
  editUserInput: EditUserInput;
  deleteUserInput: DeleteUserInput;
  Upload: Scalars['Upload'];
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  FileInput: FileInput;
  editFileInput: EditFileInput;
  Time: Scalars['Time'];
  Long: Scalars['Long'];
  CacheControlScope: CacheControlScope;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<QueryCityArgs, 'id'>>;
  cities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<QueryCitiesArgs, never>>;
  citiesConnection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType, RequireFields<QueryCitiesConnectionArgs, never>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<QueryOrdersArgs, never>>;
  ordersConnection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType, RequireFields<QueryOrdersConnectionArgs, never>>;
  orderitem?: Resolver<Maybe<ResolversTypes['Orderitem']>, ParentType, ContextType, RequireFields<QueryOrderitemArgs, 'id'>>;
  orderitems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orderitem']>>>, ParentType, ContextType, RequireFields<QueryOrderitemsArgs, never>>;
  orderitemsConnection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType, RequireFields<QueryOrderitemsConnectionArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
  productsConnection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<QueryProductsConnectionArgs, never>>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFile']>>>, ParentType, ContextType, RequireFields<QueryFilesArgs, never>>;
  filesConnection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType, RequireFields<QueryFilesConnectionArgs, never>>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>>, ParentType, ContextType, RequireFields<QueryRolesArgs, never>>;
  rolesConnection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType, RequireFields<QueryRolesConnectionArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
  usersConnection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType, RequireFields<QueryUsersConnectionArgs, never>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
}>;

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type CityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnection'] = ResolversParentTypes['CityConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['CityGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['CityAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityGroupBy'] = ResolversParentTypes['CityGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityConnectionName']>>>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<Array<Maybe<ResolversTypes['CityConnectionIs_active']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnectionId'] = ResolversParentTypes['CityConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnectionCreated_at'] = ResolversParentTypes['CityConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnectionUpdated_at'] = ResolversParentTypes['CityConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnectionName'] = ResolversParentTypes['CityConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityConnectionIs_ActiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityConnectionIs_active'] = ResolversParentTypes['CityConnectionIs_active']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CityConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CityAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityAggregator'] = ResolversParentTypes['CityAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deliveryDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  orderitems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orderitem']>>>, ParentType, ContextType, RequireFields<OrderOrderitemsArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type OrderitemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Orderitem'] = ResolversParentTypes['Orderitem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  order_id?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['Morph']>>>, ParentType, ContextType, RequireFields<UploadFileRelatedArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type MorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['Morph'] = ResolversParentTypes['Morph']> = ResolversObject<{
  __resolveType: TypeResolveFn<'UsersPermissionsMe' | 'UsersPermissionsMeRole' | 'UsersPermissionsLoginPayload' | 'ForgotPassword' | 'City' | 'CityConnection' | 'CityAggregator' | 'CityGroupBy' | 'CityConnectionId' | 'CityConnectionCreated_at' | 'CityConnectionUpdated_at' | 'CityConnectionName' | 'CityConnectionIs_active' | 'createCityPayload' | 'updateCityPayload' | 'deleteCityPayload' | 'Order' | 'OrderConnection' | 'OrderAggregator' | 'OrderAggregatorSum' | 'OrderAggregatorAvg' | 'OrderAggregatorMin' | 'OrderAggregatorMax' | 'OrderGroupBy' | 'OrderConnectionId' | 'OrderConnectionCreated_at' | 'OrderConnectionUpdated_at' | 'OrderConnectionName' | 'OrderConnectionPhone' | 'OrderConnectionDeliveryDate' | 'OrderConnectionCity' | 'OrderConnectionTotal' | 'createOrderPayload' | 'updateOrderPayload' | 'deleteOrderPayload' | 'Orderitem' | 'OrderitemConnection' | 'OrderitemAggregator' | 'OrderitemAggregatorSum' | 'OrderitemAggregatorAvg' | 'OrderitemAggregatorMin' | 'OrderitemAggregatorMax' | 'OrderitemGroupBy' | 'OrderitemConnectionId' | 'OrderitemConnectionCreated_at' | 'OrderitemConnectionUpdated_at' | 'OrderitemConnectionProduct' | 'OrderitemConnectionPrice' | 'OrderitemConnectionQuantity' | 'OrderitemConnectionOrder_id' | 'createOrderitemPayload' | 'updateOrderitemPayload' | 'deleteOrderitemPayload' | 'Product' | 'ProductConnection' | 'ProductAggregator' | 'ProductAggregatorSum' | 'ProductAggregatorAvg' | 'ProductAggregatorMin' | 'ProductAggregatorMax' | 'ProductGroupBy' | 'ProductConnectionId' | 'ProductConnectionCreated_at' | 'ProductConnectionUpdated_at' | 'ProductConnectionTitle' | 'ProductConnectionPrice' | 'ProductConnectionImage' | 'createProductPayload' | 'updateProductPayload' | 'deleteProductPayload' | 'UploadFile' | 'UploadFileConnection' | 'UploadFileAggregator' | 'UploadFileAggregatorSum' | 'UploadFileAggregatorAvg' | 'UploadFileAggregatorMin' | 'UploadFileAggregatorMax' | 'UploadFileGroupBy' | 'UploadFileConnectionId' | 'UploadFileConnectionCreated_at' | 'UploadFileConnectionUpdated_at' | 'UploadFileConnectionName' | 'UploadFileConnectionAlternativeText' | 'UploadFileConnectionCaption' | 'UploadFileConnectionWidth' | 'UploadFileConnectionHeight' | 'UploadFileConnectionFormats' | 'UploadFileConnectionHash' | 'UploadFileConnectionExt' | 'UploadFileConnectionMime' | 'UploadFileConnectionSize' | 'UploadFileConnectionUrl' | 'UploadFileConnectionPreviewUrl' | 'UploadFileConnectionProvider' | 'UploadFileConnectionProvider_metadata' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsRoleConnection' | 'UsersPermissionsRoleAggregator' | 'UsersPermissionsRoleGroupBy' | 'UsersPermissionsRoleConnectionId' | 'UsersPermissionsRoleConnectionName' | 'UsersPermissionsRoleConnectionDescription' | 'UsersPermissionsRoleConnectionType' | 'createRolePayload' | 'updateRolePayload' | 'deleteRolePayload' | 'UsersPermissionsUser' | 'UsersPermissionsUserConnection' | 'UsersPermissionsUserAggregator' | 'UsersPermissionsUserGroupBy' | 'UsersPermissionsUserConnectionId' | 'UsersPermissionsUserConnectionCreated_at' | 'UsersPermissionsUserConnectionUpdated_at' | 'UsersPermissionsUserConnectionUsername' | 'UsersPermissionsUserConnectionEmail' | 'UsersPermissionsUserConnectionProvider' | 'UsersPermissionsUserConnectionConfirmed' | 'UsersPermissionsUserConnectionBlocked' | 'UsersPermissionsUserConnectionRole' | 'createUserPayload' | 'updateUserPayload' | 'deleteUserPayload', ParentType, ContextType>;
}>;

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = ResolversObject<{
  jwt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ForgotPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ForgotPassword'] = ResolversParentTypes['ForgotPassword']> = ResolversObject<{
  ok?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateCityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createCityPayload'] = ResolversParentTypes['createCityPayload']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateCityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCityPayload'] = ResolversParentTypes['updateCityPayload']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteCityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCityPayload'] = ResolversParentTypes['deleteCityPayload']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrderGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['OrderAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderGroupBy'] = ResolversParentTypes['OrderGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionName']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionPhone']>>>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionDeliveryDate']>>>, ParentType, ContextType>;
  city?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionCity']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderConnectionTotal']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionId'] = ResolversParentTypes['OrderConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionCreated_at'] = ResolversParentTypes['OrderConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionUpdated_at'] = ResolversParentTypes['OrderConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionName'] = ResolversParentTypes['OrderConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionPhoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionPhone'] = ResolversParentTypes['OrderConnectionPhone']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionDeliveryDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionDeliveryDate'] = ResolversParentTypes['OrderConnectionDeliveryDate']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionCityResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionCity'] = ResolversParentTypes['OrderConnectionCity']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderConnectionTotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnectionTotal'] = ResolversParentTypes['OrderConnectionTotal']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregator'] = ResolversParentTypes['OrderAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrderAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['OrderAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregatorSum'] = ResolversParentTypes['OrderAggregatorSum']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregatorAvg'] = ResolversParentTypes['OrderAggregatorAvg']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregatorMin'] = ResolversParentTypes['OrderAggregatorMin']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregatorMax'] = ResolversParentTypes['OrderAggregatorMax']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createOrderPayload'] = ResolversParentTypes['createOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOrderPayload'] = ResolversParentTypes['updateOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOrderPayload'] = ResolversParentTypes['deleteOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnection'] = ResolversParentTypes['OrderitemConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orderitem']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrderitemGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['OrderitemAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemGroupBy'] = ResolversParentTypes['OrderitemGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionUpdated_at']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionProduct']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionPrice']>>>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionQuantity']>>>, ParentType, ContextType>;
  order_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderitemConnectionOrder_id']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionId'] = ResolversParentTypes['OrderitemConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionCreated_at'] = ResolversParentTypes['OrderitemConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionUpdated_at'] = ResolversParentTypes['OrderitemConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionProduct'] = ResolversParentTypes['OrderitemConnectionProduct']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionPrice'] = ResolversParentTypes['OrderitemConnectionPrice']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionQuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionQuantity'] = ResolversParentTypes['OrderitemConnectionQuantity']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemConnectionOrder_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemConnectionOrder_id'] = ResolversParentTypes['OrderitemConnectionOrder_id']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrderitemConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemAggregator'] = ResolversParentTypes['OrderitemAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrderitemAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['OrderitemAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrderitemAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrderitemAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemAggregatorSum'] = ResolversParentTypes['OrderitemAggregatorSum']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemAggregatorAvg'] = ResolversParentTypes['OrderitemAggregatorAvg']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemAggregatorMin'] = ResolversParentTypes['OrderitemAggregatorMin']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrderitemAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderitemAggregatorMax'] = ResolversParentTypes['OrderitemAggregatorMax']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateOrderitemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createOrderitemPayload'] = ResolversParentTypes['createOrderitemPayload']> = ResolversObject<{
  orderitem?: Resolver<Maybe<ResolversTypes['Orderitem']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateOrderitemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOrderitemPayload'] = ResolversParentTypes['updateOrderitemPayload']> = ResolversObject<{
  orderitem?: Resolver<Maybe<ResolversTypes['Orderitem']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteOrderitemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOrderitemPayload'] = ResolversParentTypes['deleteOrderitemPayload']> = ResolversObject<{
  orderitem?: Resolver<Maybe<ResolversTypes['Orderitem']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['ProductAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductGroupBy'] = ResolversParentTypes['ProductGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionUpdated_at']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionTitle']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionPrice']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductConnectionImage']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionId'] = ResolversParentTypes['ProductConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionCreated_at'] = ResolversParentTypes['ProductConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionUpdated_at'] = ResolversParentTypes['ProductConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionTitle'] = ResolversParentTypes['ProductConnectionTitle']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionPrice'] = ResolversParentTypes['ProductConnectionPrice']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductConnectionImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnectionImage'] = ResolversParentTypes['ProductConnectionImage']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregator'] = ResolversParentTypes['ProductAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['ProductAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregatorSum'] = ResolversParentTypes['ProductAggregatorSum']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregatorAvg'] = ResolversParentTypes['ProductAggregatorAvg']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregatorMin'] = ResolversParentTypes['ProductAggregatorMin']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregatorMax'] = ResolversParentTypes['ProductAggregatorMax']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createProductPayload'] = ResolversParentTypes['createProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateProductPayload'] = ResolversParentTypes['updateProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteProductPayload'] = ResolversParentTypes['deleteProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnection'] = ResolversParentTypes['UploadFileConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFile']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UploadFileGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UploadFileAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileGroupBy'] = ResolversParentTypes['UploadFileGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionName']>>>, ParentType, ContextType>;
  alternativeText?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionAlternativeText']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionCaption']>>>, ParentType, ContextType>;
  width?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionWidth']>>>, ParentType, ContextType>;
  height?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionHeight']>>>, ParentType, ContextType>;
  formats?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionFormats']>>>, ParentType, ContextType>;
  hash?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionHash']>>>, ParentType, ContextType>;
  ext?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionExt']>>>, ParentType, ContextType>;
  mime?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionMime']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionSize']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionUrl']>>>, ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionPreviewUrl']>>>, ParentType, ContextType>;
  provider?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionProvider']>>>, ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionProvider_metadata']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionId'] = ResolversParentTypes['UploadFileConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionCreated_at'] = ResolversParentTypes['UploadFileConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionUpdated_at'] = ResolversParentTypes['UploadFileConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionName'] = ResolversParentTypes['UploadFileConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionAlternativeTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionAlternativeText'] = ResolversParentTypes['UploadFileConnectionAlternativeText']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionCaptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionCaption'] = ResolversParentTypes['UploadFileConnectionCaption']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionWidthResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionWidth'] = ResolversParentTypes['UploadFileConnectionWidth']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionHeightResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionHeight'] = ResolversParentTypes['UploadFileConnectionHeight']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionFormatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionFormats'] = ResolversParentTypes['UploadFileConnectionFormats']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionHashResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionHash'] = ResolversParentTypes['UploadFileConnectionHash']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionExtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionExt'] = ResolversParentTypes['UploadFileConnectionExt']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionMimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionMime'] = ResolversParentTypes['UploadFileConnectionMime']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionSizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionSize'] = ResolversParentTypes['UploadFileConnectionSize']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionUrl'] = ResolversParentTypes['UploadFileConnectionUrl']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionPreviewUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionPreviewUrl'] = ResolversParentTypes['UploadFileConnectionPreviewUrl']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionProvider'] = ResolversParentTypes['UploadFileConnectionProvider']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileConnectionProvider_MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionProvider_metadata'] = ResolversParentTypes['UploadFileConnectionProvider_metadata']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregator'] = ResolversParentTypes['UploadFileAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorSum'] = ResolversParentTypes['UploadFileAggregatorSum']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorAvg'] = ResolversParentTypes['UploadFileAggregatorAvg']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorMin'] = ResolversParentTypes['UploadFileAggregatorMin']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UploadFileAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorMax'] = ResolversParentTypes['UploadFileAggregatorMax']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  controller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsPermission']>>>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, never>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnection'] = ResolversParentTypes['UsersPermissionsRoleConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleGroupBy'] = ResolversParentTypes['UsersPermissionsRoleGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionId']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionName']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionDescription']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionType']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionId'] = ResolversParentTypes['UsersPermissionsRoleConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionName'] = ResolversParentTypes['UsersPermissionsRoleConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleConnectionDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionDescription'] = ResolversParentTypes['UsersPermissionsRoleConnectionDescription']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleConnectionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionType'] = ResolversParentTypes['UsersPermissionsRoleConnectionType']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsRoleAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleAggregator'] = ResolversParentTypes['UsersPermissionsRoleAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createRolePayload'] = ResolversParentTypes['createRolePayload']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRolePayload'] = ResolversParentTypes['updateRolePayload']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRolePayload'] = ResolversParentTypes['deleteRolePayload']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnection'] = ResolversParentTypes['UsersPermissionsUserConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserGroupBy'] = ResolversParentTypes['UsersPermissionsUserGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionUpdated_at']>>>, ParentType, ContextType>;
  username?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionUsername']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionEmail']>>>, ParentType, ContextType>;
  provider?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionProvider']>>>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionConfirmed']>>>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionBlocked']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionRole']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionId'] = ResolversParentTypes['UsersPermissionsUserConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionCreated_at'] = ResolversParentTypes['UsersPermissionsUserConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at'] = ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionUsernameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionUsername'] = ResolversParentTypes['UsersPermissionsUserConnectionUsername']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionEmail'] = ResolversParentTypes['UsersPermissionsUserConnectionEmail']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionProvider'] = ResolversParentTypes['UsersPermissionsUserConnectionProvider']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionConfirmedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionConfirmed'] = ResolversParentTypes['UsersPermissionsUserConnectionConfirmed']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionBlockedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionBlocked'] = ResolversParentTypes['UsersPermissionsUserConnectionBlocked']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserConnectionRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionRole'] = ResolversParentTypes['UsersPermissionsUserConnectionRole']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UsersPermissionsUserAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserAggregator'] = ResolversParentTypes['UsersPermissionsUserAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createUserPayload'] = ResolversParentTypes['createUserPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUserPayload'] = ResolversParentTypes['updateUserPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteUserPayload'] = ResolversParentTypes['deleteUserPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCity?: Resolver<Maybe<ResolversTypes['createCityPayload']>, ParentType, ContextType, RequireFields<MutationCreateCityArgs, never>>;
  updateCity?: Resolver<Maybe<ResolversTypes['updateCityPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCityArgs, never>>;
  deleteCity?: Resolver<Maybe<ResolversTypes['deleteCityPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCityArgs, never>>;
  createOrder?: Resolver<Maybe<ResolversTypes['createOrderPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, never>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['updateOrderPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, never>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['deleteOrderPayload']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, never>>;
  createOrderitem?: Resolver<Maybe<ResolversTypes['createOrderitemPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrderitemArgs, never>>;
  updateOrderitem?: Resolver<Maybe<ResolversTypes['updateOrderitemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrderitemArgs, never>>;
  deleteOrderitem?: Resolver<Maybe<ResolversTypes['deleteOrderitemPayload']>, ParentType, ContextType, RequireFields<MutationDeleteOrderitemArgs, never>>;
  createProduct?: Resolver<Maybe<ResolversTypes['createProductPayload']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, never>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['updateProductPayload']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, never>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['deleteProductPayload']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, never>>;
  createRole?: Resolver<Maybe<ResolversTypes['createRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, never>>;
  updateRole?: Resolver<Maybe<ResolversTypes['updateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, never>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['deleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, never>>;
  createUser?: Resolver<Maybe<ResolversTypes['createUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
  updateUser?: Resolver<Maybe<ResolversTypes['updateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, never>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['deleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, never>>;
  upload?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFile']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['ForgotPassword']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'password' | 'passwordConfirmation' | 'code'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  CityConnection?: CityConnectionResolvers<ContextType>;
  CityGroupBy?: CityGroupByResolvers<ContextType>;
  CityConnectionId?: CityConnectionIdResolvers<ContextType>;
  CityConnectionCreated_at?: CityConnectionCreated_AtResolvers<ContextType>;
  CityConnectionUpdated_at?: CityConnectionUpdated_AtResolvers<ContextType>;
  CityConnectionName?: CityConnectionNameResolvers<ContextType>;
  CityConnectionIs_active?: CityConnectionIs_ActiveResolvers<ContextType>;
  CityAggregator?: CityAggregatorResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Orderitem?: OrderitemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  UploadFile?: UploadFileResolvers<ContextType>;
  Morph?: MorphResolvers;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  ForgotPassword?: ForgotPasswordResolvers<ContextType>;
  createCityPayload?: CreateCityPayloadResolvers<ContextType>;
  updateCityPayload?: UpdateCityPayloadResolvers<ContextType>;
  deleteCityPayload?: DeleteCityPayloadResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderGroupBy?: OrderGroupByResolvers<ContextType>;
  OrderConnectionId?: OrderConnectionIdResolvers<ContextType>;
  OrderConnectionCreated_at?: OrderConnectionCreated_AtResolvers<ContextType>;
  OrderConnectionUpdated_at?: OrderConnectionUpdated_AtResolvers<ContextType>;
  OrderConnectionName?: OrderConnectionNameResolvers<ContextType>;
  OrderConnectionPhone?: OrderConnectionPhoneResolvers<ContextType>;
  OrderConnectionDeliveryDate?: OrderConnectionDeliveryDateResolvers<ContextType>;
  OrderConnectionCity?: OrderConnectionCityResolvers<ContextType>;
  OrderConnectionTotal?: OrderConnectionTotalResolvers<ContextType>;
  OrderAggregator?: OrderAggregatorResolvers<ContextType>;
  OrderAggregatorSum?: OrderAggregatorSumResolvers<ContextType>;
  OrderAggregatorAvg?: OrderAggregatorAvgResolvers<ContextType>;
  OrderAggregatorMin?: OrderAggregatorMinResolvers<ContextType>;
  OrderAggregatorMax?: OrderAggregatorMaxResolvers<ContextType>;
  createOrderPayload?: CreateOrderPayloadResolvers<ContextType>;
  updateOrderPayload?: UpdateOrderPayloadResolvers<ContextType>;
  deleteOrderPayload?: DeleteOrderPayloadResolvers<ContextType>;
  OrderitemConnection?: OrderitemConnectionResolvers<ContextType>;
  OrderitemGroupBy?: OrderitemGroupByResolvers<ContextType>;
  OrderitemConnectionId?: OrderitemConnectionIdResolvers<ContextType>;
  OrderitemConnectionCreated_at?: OrderitemConnectionCreated_AtResolvers<ContextType>;
  OrderitemConnectionUpdated_at?: OrderitemConnectionUpdated_AtResolvers<ContextType>;
  OrderitemConnectionProduct?: OrderitemConnectionProductResolvers<ContextType>;
  OrderitemConnectionPrice?: OrderitemConnectionPriceResolvers<ContextType>;
  OrderitemConnectionQuantity?: OrderitemConnectionQuantityResolvers<ContextType>;
  OrderitemConnectionOrder_id?: OrderitemConnectionOrder_IdResolvers<ContextType>;
  OrderitemAggregator?: OrderitemAggregatorResolvers<ContextType>;
  OrderitemAggregatorSum?: OrderitemAggregatorSumResolvers<ContextType>;
  OrderitemAggregatorAvg?: OrderitemAggregatorAvgResolvers<ContextType>;
  OrderitemAggregatorMin?: OrderitemAggregatorMinResolvers<ContextType>;
  OrderitemAggregatorMax?: OrderitemAggregatorMaxResolvers<ContextType>;
  createOrderitemPayload?: CreateOrderitemPayloadResolvers<ContextType>;
  updateOrderitemPayload?: UpdateOrderitemPayloadResolvers<ContextType>;
  deleteOrderitemPayload?: DeleteOrderitemPayloadResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductGroupBy?: ProductGroupByResolvers<ContextType>;
  ProductConnectionId?: ProductConnectionIdResolvers<ContextType>;
  ProductConnectionCreated_at?: ProductConnectionCreated_AtResolvers<ContextType>;
  ProductConnectionUpdated_at?: ProductConnectionUpdated_AtResolvers<ContextType>;
  ProductConnectionTitle?: ProductConnectionTitleResolvers<ContextType>;
  ProductConnectionPrice?: ProductConnectionPriceResolvers<ContextType>;
  ProductConnectionImage?: ProductConnectionImageResolvers<ContextType>;
  ProductAggregator?: ProductAggregatorResolvers<ContextType>;
  ProductAggregatorSum?: ProductAggregatorSumResolvers<ContextType>;
  ProductAggregatorAvg?: ProductAggregatorAvgResolvers<ContextType>;
  ProductAggregatorMin?: ProductAggregatorMinResolvers<ContextType>;
  ProductAggregatorMax?: ProductAggregatorMaxResolvers<ContextType>;
  createProductPayload?: CreateProductPayloadResolvers<ContextType>;
  updateProductPayload?: UpdateProductPayloadResolvers<ContextType>;
  deleteProductPayload?: DeleteProductPayloadResolvers<ContextType>;
  UploadFileConnection?: UploadFileConnectionResolvers<ContextType>;
  UploadFileGroupBy?: UploadFileGroupByResolvers<ContextType>;
  UploadFileConnectionId?: UploadFileConnectionIdResolvers<ContextType>;
  UploadFileConnectionCreated_at?: UploadFileConnectionCreated_AtResolvers<ContextType>;
  UploadFileConnectionUpdated_at?: UploadFileConnectionUpdated_AtResolvers<ContextType>;
  UploadFileConnectionName?: UploadFileConnectionNameResolvers<ContextType>;
  UploadFileConnectionAlternativeText?: UploadFileConnectionAlternativeTextResolvers<ContextType>;
  UploadFileConnectionCaption?: UploadFileConnectionCaptionResolvers<ContextType>;
  UploadFileConnectionWidth?: UploadFileConnectionWidthResolvers<ContextType>;
  UploadFileConnectionHeight?: UploadFileConnectionHeightResolvers<ContextType>;
  UploadFileConnectionFormats?: UploadFileConnectionFormatsResolvers<ContextType>;
  UploadFileConnectionHash?: UploadFileConnectionHashResolvers<ContextType>;
  UploadFileConnectionExt?: UploadFileConnectionExtResolvers<ContextType>;
  UploadFileConnectionMime?: UploadFileConnectionMimeResolvers<ContextType>;
  UploadFileConnectionSize?: UploadFileConnectionSizeResolvers<ContextType>;
  UploadFileConnectionUrl?: UploadFileConnectionUrlResolvers<ContextType>;
  UploadFileConnectionPreviewUrl?: UploadFileConnectionPreviewUrlResolvers<ContextType>;
  UploadFileConnectionProvider?: UploadFileConnectionProviderResolvers<ContextType>;
  UploadFileConnectionProvider_metadata?: UploadFileConnectionProvider_MetadataResolvers<ContextType>;
  UploadFileAggregator?: UploadFileAggregatorResolvers<ContextType>;
  UploadFileAggregatorSum?: UploadFileAggregatorSumResolvers<ContextType>;
  UploadFileAggregatorAvg?: UploadFileAggregatorAvgResolvers<ContextType>;
  UploadFileAggregatorMin?: UploadFileAggregatorMinResolvers<ContextType>;
  UploadFileAggregatorMax?: UploadFileAggregatorMaxResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsRoleConnection?: UsersPermissionsRoleConnectionResolvers<ContextType>;
  UsersPermissionsRoleGroupBy?: UsersPermissionsRoleGroupByResolvers<ContextType>;
  UsersPermissionsRoleConnectionId?: UsersPermissionsRoleConnectionIdResolvers<ContextType>;
  UsersPermissionsRoleConnectionName?: UsersPermissionsRoleConnectionNameResolvers<ContextType>;
  UsersPermissionsRoleConnectionDescription?: UsersPermissionsRoleConnectionDescriptionResolvers<ContextType>;
  UsersPermissionsRoleConnectionType?: UsersPermissionsRoleConnectionTypeResolvers<ContextType>;
  UsersPermissionsRoleAggregator?: UsersPermissionsRoleAggregatorResolvers<ContextType>;
  createRolePayload?: CreateRolePayloadResolvers<ContextType>;
  updateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  deleteRolePayload?: DeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsUserConnection?: UsersPermissionsUserConnectionResolvers<ContextType>;
  UsersPermissionsUserGroupBy?: UsersPermissionsUserGroupByResolvers<ContextType>;
  UsersPermissionsUserConnectionId?: UsersPermissionsUserConnectionIdResolvers<ContextType>;
  UsersPermissionsUserConnectionCreated_at?: UsersPermissionsUserConnectionCreated_AtResolvers<ContextType>;
  UsersPermissionsUserConnectionUpdated_at?: UsersPermissionsUserConnectionUpdated_AtResolvers<ContextType>;
  UsersPermissionsUserConnectionUsername?: UsersPermissionsUserConnectionUsernameResolvers<ContextType>;
  UsersPermissionsUserConnectionEmail?: UsersPermissionsUserConnectionEmailResolvers<ContextType>;
  UsersPermissionsUserConnectionProvider?: UsersPermissionsUserConnectionProviderResolvers<ContextType>;
  UsersPermissionsUserConnectionConfirmed?: UsersPermissionsUserConnectionConfirmedResolvers<ContextType>;
  UsersPermissionsUserConnectionBlocked?: UsersPermissionsUserConnectionBlockedResolvers<ContextType>;
  UsersPermissionsUserConnectionRole?: UsersPermissionsUserConnectionRoleResolvers<ContextType>;
  UsersPermissionsUserAggregator?: UsersPermissionsUserAggregatorResolvers<ContextType>;
  createUserPayload?: CreateUserPayloadResolvers<ContextType>;
  updateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  deleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  Long?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
