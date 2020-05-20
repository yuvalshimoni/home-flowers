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
  city?: Maybe<Cities>;
  cities?: Maybe<Array<Maybe<Cities>>>;
  citiesConnection?: Maybe<CitiesConnection>;
  order?: Maybe<Orders>;
  orders?: Maybe<Array<Maybe<Orders>>>;
  ordersConnection?: Maybe<OrdersConnection>;
  product?: Maybe<Products>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsConnection?: Maybe<ProductsConnection>;
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

export type Cities = {
  __typename?: 'Cities';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  is_active: Scalars['Boolean'];
};



export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  values?: Maybe<Array<Maybe<Cities>>>;
  groupBy?: Maybe<CitiesGroupBy>;
  aggregate?: Maybe<CitiesAggregator>;
};

export type CitiesGroupBy = {
  __typename?: 'CitiesGroupBy';
  id?: Maybe<Array<Maybe<CitiesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CitiesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CitiesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CitiesConnectionName>>>;
  is_active?: Maybe<Array<Maybe<CitiesConnectionIs_Active>>>;
};

export type CitiesConnectionId = {
  __typename?: 'CitiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionCreated_At = {
  __typename?: 'CitiesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionUpdated_At = {
  __typename?: 'CitiesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionName = {
  __typename?: 'CitiesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesConnectionIs_Active = {
  __typename?: 'CitiesConnectionIs_active';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CitiesConnection>;
};

export type CitiesAggregator = {
  __typename?: 'CitiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Orders = {
  __typename?: 'Orders';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['Int'];
  deliveryDate?: Maybe<Scalars['Date']>;
  city?: Maybe<Cities>;
  is_paid?: Maybe<Scalars['Boolean']>;
  products?: Maybe<Array<Maybe<Products>>>;
};


export type OrdersProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type Products = {
  __typename?: 'Products';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  is_active?: Maybe<Scalars['Boolean']>;
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

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | ForgotPassword | Cities | CitiesConnection | CitiesAggregator | CitiesGroupBy | CitiesConnectionId | CitiesConnectionCreated_At | CitiesConnectionUpdated_At | CitiesConnectionName | CitiesConnectionIs_Active | CreateCityPayload | UpdateCityPayload | DeleteCityPayload | Orders | OrdersConnection | OrdersAggregator | OrdersAggregatorSum | OrdersAggregatorAvg | OrdersAggregatorMin | OrdersAggregatorMax | OrdersGroupBy | OrdersConnectionId | OrdersConnectionCreated_At | OrdersConnectionUpdated_At | OrdersConnectionName | OrdersConnectionPhone | OrdersConnectionDeliveryDate | OrdersConnectionCity | OrdersConnectionIs_Paid | CreateOrderPayload | UpdateOrderPayload | DeleteOrderPayload | Products | ProductsConnection | ProductsAggregator | ProductsAggregatorSum | ProductsAggregatorAvg | ProductsAggregatorMin | ProductsAggregatorMax | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionTitle | ProductsConnectionPrice | ProductsConnectionDescription | ProductsConnectionImage | ProductsConnectionIs_Active | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

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
  city?: Maybe<Cities>;
};

export type UpdateCityPayload = {
  __typename?: 'updateCityPayload';
  city?: Maybe<Cities>;
};

export type DeleteCityPayload = {
  __typename?: 'deleteCityPayload';
  city?: Maybe<Cities>;
};

export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  values?: Maybe<Array<Maybe<Orders>>>;
  groupBy?: Maybe<OrdersGroupBy>;
  aggregate?: Maybe<OrdersAggregator>;
};

export type OrdersGroupBy = {
  __typename?: 'OrdersGroupBy';
  id?: Maybe<Array<Maybe<OrdersConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrdersConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrdersConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<OrdersConnectionName>>>;
  phone?: Maybe<Array<Maybe<OrdersConnectionPhone>>>;
  deliveryDate?: Maybe<Array<Maybe<OrdersConnectionDeliveryDate>>>;
  city?: Maybe<Array<Maybe<OrdersConnectionCity>>>;
  is_paid?: Maybe<Array<Maybe<OrdersConnectionIs_Paid>>>;
};

export type OrdersConnectionId = {
  __typename?: 'OrdersConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionCreated_At = {
  __typename?: 'OrdersConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionUpdated_At = {
  __typename?: 'OrdersConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionName = {
  __typename?: 'OrdersConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionPhone = {
  __typename?: 'OrdersConnectionPhone';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionDeliveryDate = {
  __typename?: 'OrdersConnectionDeliveryDate';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionCity = {
  __typename?: 'OrdersConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersConnectionIs_Paid = {
  __typename?: 'OrdersConnectionIs_paid';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<OrdersConnection>;
};

export type OrdersAggregator = {
  __typename?: 'OrdersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrdersAggregatorSum>;
  avg?: Maybe<OrdersAggregatorAvg>;
  min?: Maybe<OrdersAggregatorMin>;
  max?: Maybe<OrdersAggregatorMax>;
};

export type OrdersAggregatorSum = {
  __typename?: 'OrdersAggregatorSum';
  phone?: Maybe<Scalars['Float']>;
};

export type OrdersAggregatorAvg = {
  __typename?: 'OrdersAggregatorAvg';
  phone?: Maybe<Scalars['Float']>;
};

export type OrdersAggregatorMin = {
  __typename?: 'OrdersAggregatorMin';
  phone?: Maybe<Scalars['Float']>;
};

export type OrdersAggregatorMax = {
  __typename?: 'OrdersAggregatorMax';
  phone?: Maybe<Scalars['Float']>;
};

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload';
  order?: Maybe<Orders>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  order?: Maybe<Orders>;
};

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload';
  order?: Maybe<Orders>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  values?: Maybe<Array<Maybe<Products>>>;
  groupBy?: Maybe<ProductsGroupBy>;
  aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductsConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ProductsConnectionTitle>>>;
  price?: Maybe<Array<Maybe<ProductsConnectionPrice>>>;
  description?: Maybe<Array<Maybe<ProductsConnectionDescription>>>;
  image?: Maybe<Array<Maybe<ProductsConnectionImage>>>;
  is_active?: Maybe<Array<Maybe<ProductsConnectionIs_Active>>>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionCreated_At = {
  __typename?: 'ProductsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdated_At = {
  __typename?: 'ProductsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionTitle = {
  __typename?: 'ProductsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPrice = {
  __typename?: 'ProductsConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionDescription = {
  __typename?: 'ProductsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionImage = {
  __typename?: 'ProductsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionIs_Active = {
  __typename?: 'ProductsConnectionIs_active';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductsAggregatorSum>;
  avg?: Maybe<ProductsAggregatorAvg>;
  min?: Maybe<ProductsAggregatorMin>;
  max?: Maybe<ProductsAggregatorMax>;
};

export type ProductsAggregatorSum = {
  __typename?: 'ProductsAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorAvg = {
  __typename?: 'ProductsAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorMin = {
  __typename?: 'ProductsAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type ProductsAggregatorMax = {
  __typename?: 'ProductsAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
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
  name?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  phone: Scalars['Int'];
  deliveryDate?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_paid?: Maybe<Scalars['Boolean']>;
};

export type UpdateOrderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderInput>;
};

export type EditOrderInput = {
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Int']>;
  deliveryDate?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_paid?: Maybe<Scalars['Boolean']>;
};

export type DeleteOrderInput = {
  where?: Maybe<InputId>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type ProductInput = {
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type EditProductInput = {
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
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
  Cities: ResolverTypeWrapper<Cities>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  CitiesConnection: ResolverTypeWrapper<CitiesConnection>;
  CitiesGroupBy: ResolverTypeWrapper<CitiesGroupBy>;
  CitiesConnectionId: ResolverTypeWrapper<CitiesConnectionId>;
  CitiesConnectionCreated_at: ResolverTypeWrapper<CitiesConnectionCreated_At>;
  CitiesConnectionUpdated_at: ResolverTypeWrapper<CitiesConnectionUpdated_At>;
  CitiesConnectionName: ResolverTypeWrapper<CitiesConnectionName>;
  CitiesConnectionIs_active: ResolverTypeWrapper<CitiesConnectionIs_Active>;
  CitiesAggregator: ResolverTypeWrapper<CitiesAggregator>;
  Orders: ResolverTypeWrapper<Orders>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Products: ResolverTypeWrapper<Products>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['Morph']>>> }>;
  Morph: ResolversTypes['UsersPermissionsMe'] | ResolversTypes['UsersPermissionsMeRole'] | ResolversTypes['UsersPermissionsLoginPayload'] | ResolversTypes['ForgotPassword'] | ResolversTypes['Cities'] | ResolversTypes['CitiesConnection'] | ResolversTypes['CitiesAggregator'] | ResolversTypes['CitiesGroupBy'] | ResolversTypes['CitiesConnectionId'] | ResolversTypes['CitiesConnectionCreated_at'] | ResolversTypes['CitiesConnectionUpdated_at'] | ResolversTypes['CitiesConnectionName'] | ResolversTypes['CitiesConnectionIs_active'] | ResolversTypes['createCityPayload'] | ResolversTypes['updateCityPayload'] | ResolversTypes['deleteCityPayload'] | ResolversTypes['Orders'] | ResolversTypes['OrdersConnection'] | ResolversTypes['OrdersAggregator'] | ResolversTypes['OrdersAggregatorSum'] | ResolversTypes['OrdersAggregatorAvg'] | ResolversTypes['OrdersAggregatorMin'] | ResolversTypes['OrdersAggregatorMax'] | ResolversTypes['OrdersGroupBy'] | ResolversTypes['OrdersConnectionId'] | ResolversTypes['OrdersConnectionCreated_at'] | ResolversTypes['OrdersConnectionUpdated_at'] | ResolversTypes['OrdersConnectionName'] | ResolversTypes['OrdersConnectionPhone'] | ResolversTypes['OrdersConnectionDeliveryDate'] | ResolversTypes['OrdersConnectionCity'] | ResolversTypes['OrdersConnectionIs_paid'] | ResolversTypes['createOrderPayload'] | ResolversTypes['updateOrderPayload'] | ResolversTypes['deleteOrderPayload'] | ResolversTypes['Products'] | ResolversTypes['ProductsConnection'] | ResolversTypes['ProductsAggregator'] | ResolversTypes['ProductsAggregatorSum'] | ResolversTypes['ProductsAggregatorAvg'] | ResolversTypes['ProductsAggregatorMin'] | ResolversTypes['ProductsAggregatorMax'] | ResolversTypes['ProductsGroupBy'] | ResolversTypes['ProductsConnectionId'] | ResolversTypes['ProductsConnectionCreated_at'] | ResolversTypes['ProductsConnectionUpdated_at'] | ResolversTypes['ProductsConnectionTitle'] | ResolversTypes['ProductsConnectionPrice'] | ResolversTypes['ProductsConnectionDescription'] | ResolversTypes['ProductsConnectionImage'] | ResolversTypes['ProductsConnectionIs_active'] | ResolversTypes['createProductPayload'] | ResolversTypes['updateProductPayload'] | ResolversTypes['deleteProductPayload'] | ResolversTypes['UploadFile'] | ResolversTypes['UploadFileConnection'] | ResolversTypes['UploadFileAggregator'] | ResolversTypes['UploadFileAggregatorSum'] | ResolversTypes['UploadFileAggregatorAvg'] | ResolversTypes['UploadFileAggregatorMin'] | ResolversTypes['UploadFileAggregatorMax'] | ResolversTypes['UploadFileGroupBy'] | ResolversTypes['UploadFileConnectionId'] | ResolversTypes['UploadFileConnectionCreated_at'] | ResolversTypes['UploadFileConnectionUpdated_at'] | ResolversTypes['UploadFileConnectionName'] | ResolversTypes['UploadFileConnectionAlternativeText'] | ResolversTypes['UploadFileConnectionCaption'] | ResolversTypes['UploadFileConnectionWidth'] | ResolversTypes['UploadFileConnectionHeight'] | ResolversTypes['UploadFileConnectionFormats'] | ResolversTypes['UploadFileConnectionHash'] | ResolversTypes['UploadFileConnectionExt'] | ResolversTypes['UploadFileConnectionMime'] | ResolversTypes['UploadFileConnectionSize'] | ResolversTypes['UploadFileConnectionUrl'] | ResolversTypes['UploadFileConnectionPreviewUrl'] | ResolversTypes['UploadFileConnectionProvider'] | ResolversTypes['UploadFileConnectionProvider_metadata'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsRoleConnection'] | ResolversTypes['UsersPermissionsRoleAggregator'] | ResolversTypes['UsersPermissionsRoleGroupBy'] | ResolversTypes['UsersPermissionsRoleConnectionId'] | ResolversTypes['UsersPermissionsRoleConnectionName'] | ResolversTypes['UsersPermissionsRoleConnectionDescription'] | ResolversTypes['UsersPermissionsRoleConnectionType'] | ResolversTypes['createRolePayload'] | ResolversTypes['updateRolePayload'] | ResolversTypes['deleteRolePayload'] | ResolversTypes['UsersPermissionsUser'] | ResolversTypes['UsersPermissionsUserConnection'] | ResolversTypes['UsersPermissionsUserAggregator'] | ResolversTypes['UsersPermissionsUserGroupBy'] | ResolversTypes['UsersPermissionsUserConnectionId'] | ResolversTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversTypes['UsersPermissionsUserConnectionUsername'] | ResolversTypes['UsersPermissionsUserConnectionEmail'] | ResolversTypes['UsersPermissionsUserConnectionProvider'] | ResolversTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversTypes['UsersPermissionsUserConnectionBlocked'] | ResolversTypes['UsersPermissionsUserConnectionRole'] | ResolversTypes['createUserPayload'] | ResolversTypes['updateUserPayload'] | ResolversTypes['deleteUserPayload'];
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  ForgotPassword: ResolverTypeWrapper<ForgotPassword>;
  createCityPayload: ResolverTypeWrapper<CreateCityPayload>;
  updateCityPayload: ResolverTypeWrapper<UpdateCityPayload>;
  deleteCityPayload: ResolverTypeWrapper<DeleteCityPayload>;
  OrdersConnection: ResolverTypeWrapper<OrdersConnection>;
  OrdersGroupBy: ResolverTypeWrapper<OrdersGroupBy>;
  OrdersConnectionId: ResolverTypeWrapper<OrdersConnectionId>;
  OrdersConnectionCreated_at: ResolverTypeWrapper<OrdersConnectionCreated_At>;
  OrdersConnectionUpdated_at: ResolverTypeWrapper<OrdersConnectionUpdated_At>;
  OrdersConnectionName: ResolverTypeWrapper<OrdersConnectionName>;
  OrdersConnectionPhone: ResolverTypeWrapper<OrdersConnectionPhone>;
  OrdersConnectionDeliveryDate: ResolverTypeWrapper<OrdersConnectionDeliveryDate>;
  OrdersConnectionCity: ResolverTypeWrapper<OrdersConnectionCity>;
  OrdersConnectionIs_paid: ResolverTypeWrapper<OrdersConnectionIs_Paid>;
  OrdersAggregator: ResolverTypeWrapper<OrdersAggregator>;
  OrdersAggregatorSum: ResolverTypeWrapper<OrdersAggregatorSum>;
  OrdersAggregatorAvg: ResolverTypeWrapper<OrdersAggregatorAvg>;
  OrdersAggregatorMin: ResolverTypeWrapper<OrdersAggregatorMin>;
  OrdersAggregatorMax: ResolverTypeWrapper<OrdersAggregatorMax>;
  createOrderPayload: ResolverTypeWrapper<CreateOrderPayload>;
  updateOrderPayload: ResolverTypeWrapper<UpdateOrderPayload>;
  deleteOrderPayload: ResolverTypeWrapper<DeleteOrderPayload>;
  ProductsConnection: ResolverTypeWrapper<ProductsConnection>;
  ProductsGroupBy: ResolverTypeWrapper<ProductsGroupBy>;
  ProductsConnectionId: ResolverTypeWrapper<ProductsConnectionId>;
  ProductsConnectionCreated_at: ResolverTypeWrapper<ProductsConnectionCreated_At>;
  ProductsConnectionUpdated_at: ResolverTypeWrapper<ProductsConnectionUpdated_At>;
  ProductsConnectionTitle: ResolverTypeWrapper<ProductsConnectionTitle>;
  ProductsConnectionPrice: ResolverTypeWrapper<ProductsConnectionPrice>;
  ProductsConnectionDescription: ResolverTypeWrapper<ProductsConnectionDescription>;
  ProductsConnectionImage: ResolverTypeWrapper<ProductsConnectionImage>;
  ProductsConnectionIs_active: ResolverTypeWrapper<ProductsConnectionIs_Active>;
  ProductsAggregator: ResolverTypeWrapper<ProductsAggregator>;
  ProductsAggregatorSum: ResolverTypeWrapper<ProductsAggregatorSum>;
  ProductsAggregatorAvg: ResolverTypeWrapper<ProductsAggregatorAvg>;
  ProductsAggregatorMin: ResolverTypeWrapper<ProductsAggregatorMin>;
  ProductsAggregatorMax: ResolverTypeWrapper<ProductsAggregatorMax>;
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
  Cities: Cities;
  DateTime: Scalars['DateTime'];
  JSON: Scalars['JSON'];
  CitiesConnection: CitiesConnection;
  CitiesGroupBy: CitiesGroupBy;
  CitiesConnectionId: CitiesConnectionId;
  CitiesConnectionCreated_at: CitiesConnectionCreated_At;
  CitiesConnectionUpdated_at: CitiesConnectionUpdated_At;
  CitiesConnectionName: CitiesConnectionName;
  CitiesConnectionIs_active: CitiesConnectionIs_Active;
  CitiesAggregator: CitiesAggregator;
  Orders: Orders;
  Date: Scalars['Date'];
  Products: Products;
  Float: Scalars['Float'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['Morph']>>> };
  Morph: ResolversParentTypes['UsersPermissionsMe'] | ResolversParentTypes['UsersPermissionsMeRole'] | ResolversParentTypes['UsersPermissionsLoginPayload'] | ResolversParentTypes['ForgotPassword'] | ResolversParentTypes['Cities'] | ResolversParentTypes['CitiesConnection'] | ResolversParentTypes['CitiesAggregator'] | ResolversParentTypes['CitiesGroupBy'] | ResolversParentTypes['CitiesConnectionId'] | ResolversParentTypes['CitiesConnectionCreated_at'] | ResolversParentTypes['CitiesConnectionUpdated_at'] | ResolversParentTypes['CitiesConnectionName'] | ResolversParentTypes['CitiesConnectionIs_active'] | ResolversParentTypes['createCityPayload'] | ResolversParentTypes['updateCityPayload'] | ResolversParentTypes['deleteCityPayload'] | ResolversParentTypes['Orders'] | ResolversParentTypes['OrdersConnection'] | ResolversParentTypes['OrdersAggregator'] | ResolversParentTypes['OrdersAggregatorSum'] | ResolversParentTypes['OrdersAggregatorAvg'] | ResolversParentTypes['OrdersAggregatorMin'] | ResolversParentTypes['OrdersAggregatorMax'] | ResolversParentTypes['OrdersGroupBy'] | ResolversParentTypes['OrdersConnectionId'] | ResolversParentTypes['OrdersConnectionCreated_at'] | ResolversParentTypes['OrdersConnectionUpdated_at'] | ResolversParentTypes['OrdersConnectionName'] | ResolversParentTypes['OrdersConnectionPhone'] | ResolversParentTypes['OrdersConnectionDeliveryDate'] | ResolversParentTypes['OrdersConnectionCity'] | ResolversParentTypes['OrdersConnectionIs_paid'] | ResolversParentTypes['createOrderPayload'] | ResolversParentTypes['updateOrderPayload'] | ResolversParentTypes['deleteOrderPayload'] | ResolversParentTypes['Products'] | ResolversParentTypes['ProductsConnection'] | ResolversParentTypes['ProductsAggregator'] | ResolversParentTypes['ProductsAggregatorSum'] | ResolversParentTypes['ProductsAggregatorAvg'] | ResolversParentTypes['ProductsAggregatorMin'] | ResolversParentTypes['ProductsAggregatorMax'] | ResolversParentTypes['ProductsGroupBy'] | ResolversParentTypes['ProductsConnectionId'] | ResolversParentTypes['ProductsConnectionCreated_at'] | ResolversParentTypes['ProductsConnectionUpdated_at'] | ResolversParentTypes['ProductsConnectionTitle'] | ResolversParentTypes['ProductsConnectionPrice'] | ResolversParentTypes['ProductsConnectionDescription'] | ResolversParentTypes['ProductsConnectionImage'] | ResolversParentTypes['ProductsConnectionIs_active'] | ResolversParentTypes['createProductPayload'] | ResolversParentTypes['updateProductPayload'] | ResolversParentTypes['deleteProductPayload'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['UploadFileConnection'] | ResolversParentTypes['UploadFileAggregator'] | ResolversParentTypes['UploadFileAggregatorSum'] | ResolversParentTypes['UploadFileAggregatorAvg'] | ResolversParentTypes['UploadFileAggregatorMin'] | ResolversParentTypes['UploadFileAggregatorMax'] | ResolversParentTypes['UploadFileGroupBy'] | ResolversParentTypes['UploadFileConnectionId'] | ResolversParentTypes['UploadFileConnectionCreated_at'] | ResolversParentTypes['UploadFileConnectionUpdated_at'] | ResolversParentTypes['UploadFileConnectionName'] | ResolversParentTypes['UploadFileConnectionAlternativeText'] | ResolversParentTypes['UploadFileConnectionCaption'] | ResolversParentTypes['UploadFileConnectionWidth'] | ResolversParentTypes['UploadFileConnectionHeight'] | ResolversParentTypes['UploadFileConnectionFormats'] | ResolversParentTypes['UploadFileConnectionHash'] | ResolversParentTypes['UploadFileConnectionExt'] | ResolversParentTypes['UploadFileConnectionMime'] | ResolversParentTypes['UploadFileConnectionSize'] | ResolversParentTypes['UploadFileConnectionUrl'] | ResolversParentTypes['UploadFileConnectionPreviewUrl'] | ResolversParentTypes['UploadFileConnectionProvider'] | ResolversParentTypes['UploadFileConnectionProvider_metadata'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsRoleConnection'] | ResolversParentTypes['UsersPermissionsRoleAggregator'] | ResolversParentTypes['UsersPermissionsRoleGroupBy'] | ResolversParentTypes['UsersPermissionsRoleConnectionId'] | ResolversParentTypes['UsersPermissionsRoleConnectionName'] | ResolversParentTypes['UsersPermissionsRoleConnectionDescription'] | ResolversParentTypes['UsersPermissionsRoleConnectionType'] | ResolversParentTypes['createRolePayload'] | ResolversParentTypes['updateRolePayload'] | ResolversParentTypes['deleteRolePayload'] | ResolversParentTypes['UsersPermissionsUser'] | ResolversParentTypes['UsersPermissionsUserConnection'] | ResolversParentTypes['UsersPermissionsUserAggregator'] | ResolversParentTypes['UsersPermissionsUserGroupBy'] | ResolversParentTypes['UsersPermissionsUserConnectionId'] | ResolversParentTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUsername'] | ResolversParentTypes['UsersPermissionsUserConnectionEmail'] | ResolversParentTypes['UsersPermissionsUserConnectionProvider'] | ResolversParentTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversParentTypes['UsersPermissionsUserConnectionBlocked'] | ResolversParentTypes['UsersPermissionsUserConnectionRole'] | ResolversParentTypes['createUserPayload'] | ResolversParentTypes['updateUserPayload'] | ResolversParentTypes['deleteUserPayload'];
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  ForgotPassword: ForgotPassword;
  createCityPayload: CreateCityPayload;
  updateCityPayload: UpdateCityPayload;
  deleteCityPayload: DeleteCityPayload;
  OrdersConnection: OrdersConnection;
  OrdersGroupBy: OrdersGroupBy;
  OrdersConnectionId: OrdersConnectionId;
  OrdersConnectionCreated_at: OrdersConnectionCreated_At;
  OrdersConnectionUpdated_at: OrdersConnectionUpdated_At;
  OrdersConnectionName: OrdersConnectionName;
  OrdersConnectionPhone: OrdersConnectionPhone;
  OrdersConnectionDeliveryDate: OrdersConnectionDeliveryDate;
  OrdersConnectionCity: OrdersConnectionCity;
  OrdersConnectionIs_paid: OrdersConnectionIs_Paid;
  OrdersAggregator: OrdersAggregator;
  OrdersAggregatorSum: OrdersAggregatorSum;
  OrdersAggregatorAvg: OrdersAggregatorAvg;
  OrdersAggregatorMin: OrdersAggregatorMin;
  OrdersAggregatorMax: OrdersAggregatorMax;
  createOrderPayload: CreateOrderPayload;
  updateOrderPayload: UpdateOrderPayload;
  deleteOrderPayload: DeleteOrderPayload;
  ProductsConnection: ProductsConnection;
  ProductsGroupBy: ProductsGroupBy;
  ProductsConnectionId: ProductsConnectionId;
  ProductsConnectionCreated_at: ProductsConnectionCreated_At;
  ProductsConnectionUpdated_at: ProductsConnectionUpdated_At;
  ProductsConnectionTitle: ProductsConnectionTitle;
  ProductsConnectionPrice: ProductsConnectionPrice;
  ProductsConnectionDescription: ProductsConnectionDescription;
  ProductsConnectionImage: ProductsConnectionImage;
  ProductsConnectionIs_active: ProductsConnectionIs_Active;
  ProductsAggregator: ProductsAggregator;
  ProductsAggregatorSum: ProductsAggregatorSum;
  ProductsAggregatorAvg: ProductsAggregatorAvg;
  ProductsAggregatorMin: ProductsAggregatorMin;
  ProductsAggregatorMax: ProductsAggregatorMax;
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
  city?: Resolver<Maybe<ResolversTypes['Cities']>, ParentType, ContextType, RequireFields<QueryCityArgs, 'id'>>;
  cities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cities']>>>, ParentType, ContextType, RequireFields<QueryCitiesArgs, never>>;
  citiesConnection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType, RequireFields<QueryCitiesConnectionArgs, never>>;
  order?: Resolver<Maybe<ResolversTypes['Orders']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orders']>>>, ParentType, ContextType, RequireFields<QueryOrdersArgs, never>>;
  ordersConnection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType, RequireFields<QueryOrdersConnectionArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Products']>>>, ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
  productsConnection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType, RequireFields<QueryProductsConnectionArgs, never>>;
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

export type CitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cities'] = ResolversParentTypes['Cities']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type CitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnection'] = ResolversParentTypes['CitiesConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cities']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['CitiesGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['CitiesAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesGroupBy'] = ResolversParentTypes['CitiesGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesConnectionName']>>>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitiesConnectionIs_active']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnectionId'] = ResolversParentTypes['CitiesConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnectionCreated_at'] = ResolversParentTypes['CitiesConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnectionUpdated_at'] = ResolversParentTypes['CitiesConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnectionName'] = ResolversParentTypes['CitiesConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesConnectionIs_ActiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnectionIs_active'] = ResolversParentTypes['CitiesConnectionIs_active']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['CitiesConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CitiesAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesAggregator'] = ResolversParentTypes['CitiesAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Orders'] = ResolversParentTypes['Orders']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['Cities']>, ParentType, ContextType>;
  is_paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Products']>>>, ParentType, ContextType, RequireFields<OrdersProductsArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'UsersPermissionsMe' | 'UsersPermissionsMeRole' | 'UsersPermissionsLoginPayload' | 'ForgotPassword' | 'Cities' | 'CitiesConnection' | 'CitiesAggregator' | 'CitiesGroupBy' | 'CitiesConnectionId' | 'CitiesConnectionCreated_at' | 'CitiesConnectionUpdated_at' | 'CitiesConnectionName' | 'CitiesConnectionIs_active' | 'createCityPayload' | 'updateCityPayload' | 'deleteCityPayload' | 'Orders' | 'OrdersConnection' | 'OrdersAggregator' | 'OrdersAggregatorSum' | 'OrdersAggregatorAvg' | 'OrdersAggregatorMin' | 'OrdersAggregatorMax' | 'OrdersGroupBy' | 'OrdersConnectionId' | 'OrdersConnectionCreated_at' | 'OrdersConnectionUpdated_at' | 'OrdersConnectionName' | 'OrdersConnectionPhone' | 'OrdersConnectionDeliveryDate' | 'OrdersConnectionCity' | 'OrdersConnectionIs_paid' | 'createOrderPayload' | 'updateOrderPayload' | 'deleteOrderPayload' | 'Products' | 'ProductsConnection' | 'ProductsAggregator' | 'ProductsAggregatorSum' | 'ProductsAggregatorAvg' | 'ProductsAggregatorMin' | 'ProductsAggregatorMax' | 'ProductsGroupBy' | 'ProductsConnectionId' | 'ProductsConnectionCreated_at' | 'ProductsConnectionUpdated_at' | 'ProductsConnectionTitle' | 'ProductsConnectionPrice' | 'ProductsConnectionDescription' | 'ProductsConnectionImage' | 'ProductsConnectionIs_active' | 'createProductPayload' | 'updateProductPayload' | 'deleteProductPayload' | 'UploadFile' | 'UploadFileConnection' | 'UploadFileAggregator' | 'UploadFileAggregatorSum' | 'UploadFileAggregatorAvg' | 'UploadFileAggregatorMin' | 'UploadFileAggregatorMax' | 'UploadFileGroupBy' | 'UploadFileConnectionId' | 'UploadFileConnectionCreated_at' | 'UploadFileConnectionUpdated_at' | 'UploadFileConnectionName' | 'UploadFileConnectionAlternativeText' | 'UploadFileConnectionCaption' | 'UploadFileConnectionWidth' | 'UploadFileConnectionHeight' | 'UploadFileConnectionFormats' | 'UploadFileConnectionHash' | 'UploadFileConnectionExt' | 'UploadFileConnectionMime' | 'UploadFileConnectionSize' | 'UploadFileConnectionUrl' | 'UploadFileConnectionPreviewUrl' | 'UploadFileConnectionProvider' | 'UploadFileConnectionProvider_metadata' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsRoleConnection' | 'UsersPermissionsRoleAggregator' | 'UsersPermissionsRoleGroupBy' | 'UsersPermissionsRoleConnectionId' | 'UsersPermissionsRoleConnectionName' | 'UsersPermissionsRoleConnectionDescription' | 'UsersPermissionsRoleConnectionType' | 'createRolePayload' | 'updateRolePayload' | 'deleteRolePayload' | 'UsersPermissionsUser' | 'UsersPermissionsUserConnection' | 'UsersPermissionsUserAggregator' | 'UsersPermissionsUserGroupBy' | 'UsersPermissionsUserConnectionId' | 'UsersPermissionsUserConnectionCreated_at' | 'UsersPermissionsUserConnectionUpdated_at' | 'UsersPermissionsUserConnectionUsername' | 'UsersPermissionsUserConnectionEmail' | 'UsersPermissionsUserConnectionProvider' | 'UsersPermissionsUserConnectionConfirmed' | 'UsersPermissionsUserConnectionBlocked' | 'UsersPermissionsUserConnectionRole' | 'createUserPayload' | 'updateUserPayload' | 'deleteUserPayload', ParentType, ContextType>;
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
  city?: Resolver<Maybe<ResolversTypes['Cities']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateCityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCityPayload'] = ResolversParentTypes['updateCityPayload']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['Cities']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteCityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCityPayload'] = ResolversParentTypes['deleteCityPayload']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['Cities']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnection'] = ResolversParentTypes['OrdersConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Orders']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['OrdersGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['OrdersAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersGroupBy'] = ResolversParentTypes['OrdersGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionName']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionPhone']>>>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionDeliveryDate']>>>, ParentType, ContextType>;
  city?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionCity']>>>, ParentType, ContextType>;
  is_paid?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrdersConnectionIs_paid']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionId'] = ResolversParentTypes['OrdersConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionCreated_at'] = ResolversParentTypes['OrdersConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionUpdated_at'] = ResolversParentTypes['OrdersConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionName'] = ResolversParentTypes['OrdersConnectionName']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionPhoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionPhone'] = ResolversParentTypes['OrdersConnectionPhone']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionDeliveryDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionDeliveryDate'] = ResolversParentTypes['OrdersConnectionDeliveryDate']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionCityResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionCity'] = ResolversParentTypes['OrdersConnectionCity']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersConnectionIs_PaidResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnectionIs_paid'] = ResolversParentTypes['OrdersConnectionIs_paid']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['OrdersConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersAggregator'] = ResolversParentTypes['OrdersAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['OrdersAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['OrdersAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OrdersAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['OrdersAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersAggregatorSum'] = ResolversParentTypes['OrdersAggregatorSum']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersAggregatorAvg'] = ResolversParentTypes['OrdersAggregatorAvg']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersAggregatorMin'] = ResolversParentTypes['OrdersAggregatorMin']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type OrdersAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersAggregatorMax'] = ResolversParentTypes['OrdersAggregatorMax']> = ResolversObject<{
  phone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createOrderPayload'] = ResolversParentTypes['createOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Orders']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateOrderPayload'] = ResolversParentTypes['updateOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Orders']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteOrderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteOrderPayload'] = ResolversParentTypes['deleteOrderPayload']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Orders']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnection'] = ResolversParentTypes['ProductsConnection']> = ResolversObject<{
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Products']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProductsGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['ProductsAggregator']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsGroupBy'] = ResolversParentTypes['ProductsGroupBy']> = ResolversObject<{
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionUpdated_at']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionTitle']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionPrice']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionDescription']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionImage']>>>, ParentType, ContextType>;
  is_active?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsConnectionIs_active']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionId'] = ResolversParentTypes['ProductsConnectionId']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionCreated_at'] = ResolversParentTypes['ProductsConnectionCreated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionUpdated_at'] = ResolversParentTypes['ProductsConnectionUpdated_at']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionTitle'] = ResolversParentTypes['ProductsConnectionTitle']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionPrice'] = ResolversParentTypes['ProductsConnectionPrice']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionDescription'] = ResolversParentTypes['ProductsConnectionDescription']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionImage'] = ResolversParentTypes['ProductsConnectionImage']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsConnectionIs_ActiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnectionIs_active'] = ResolversParentTypes['ProductsConnectionIs_active']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProductsConnection']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsAggregator'] = ResolversParentTypes['ProductsAggregator']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProductsAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['ProductsAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProductsAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProductsAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsAggregatorSum'] = ResolversParentTypes['ProductsAggregatorSum']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsAggregatorAvg'] = ResolversParentTypes['ProductsAggregatorAvg']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsAggregatorMin'] = ResolversParentTypes['ProductsAggregatorMin']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type ProductsAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsAggregatorMax'] = ResolversParentTypes['ProductsAggregatorMax']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type CreateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createProductPayload'] = ResolversParentTypes['createProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type UpdateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateProductPayload'] = ResolversParentTypes['updateProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type DeleteProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteProductPayload'] = ResolversParentTypes['deleteProductPayload']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType>;
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
  Cities?: CitiesResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  CitiesConnection?: CitiesConnectionResolvers<ContextType>;
  CitiesGroupBy?: CitiesGroupByResolvers<ContextType>;
  CitiesConnectionId?: CitiesConnectionIdResolvers<ContextType>;
  CitiesConnectionCreated_at?: CitiesConnectionCreated_AtResolvers<ContextType>;
  CitiesConnectionUpdated_at?: CitiesConnectionUpdated_AtResolvers<ContextType>;
  CitiesConnectionName?: CitiesConnectionNameResolvers<ContextType>;
  CitiesConnectionIs_active?: CitiesConnectionIs_ActiveResolvers<ContextType>;
  CitiesAggregator?: CitiesAggregatorResolvers<ContextType>;
  Orders?: OrdersResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Products?: ProductsResolvers<ContextType>;
  UploadFile?: UploadFileResolvers<ContextType>;
  Morph?: MorphResolvers;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  ForgotPassword?: ForgotPasswordResolvers<ContextType>;
  createCityPayload?: CreateCityPayloadResolvers<ContextType>;
  updateCityPayload?: UpdateCityPayloadResolvers<ContextType>;
  deleteCityPayload?: DeleteCityPayloadResolvers<ContextType>;
  OrdersConnection?: OrdersConnectionResolvers<ContextType>;
  OrdersGroupBy?: OrdersGroupByResolvers<ContextType>;
  OrdersConnectionId?: OrdersConnectionIdResolvers<ContextType>;
  OrdersConnectionCreated_at?: OrdersConnectionCreated_AtResolvers<ContextType>;
  OrdersConnectionUpdated_at?: OrdersConnectionUpdated_AtResolvers<ContextType>;
  OrdersConnectionName?: OrdersConnectionNameResolvers<ContextType>;
  OrdersConnectionPhone?: OrdersConnectionPhoneResolvers<ContextType>;
  OrdersConnectionDeliveryDate?: OrdersConnectionDeliveryDateResolvers<ContextType>;
  OrdersConnectionCity?: OrdersConnectionCityResolvers<ContextType>;
  OrdersConnectionIs_paid?: OrdersConnectionIs_PaidResolvers<ContextType>;
  OrdersAggregator?: OrdersAggregatorResolvers<ContextType>;
  OrdersAggregatorSum?: OrdersAggregatorSumResolvers<ContextType>;
  OrdersAggregatorAvg?: OrdersAggregatorAvgResolvers<ContextType>;
  OrdersAggregatorMin?: OrdersAggregatorMinResolvers<ContextType>;
  OrdersAggregatorMax?: OrdersAggregatorMaxResolvers<ContextType>;
  createOrderPayload?: CreateOrderPayloadResolvers<ContextType>;
  updateOrderPayload?: UpdateOrderPayloadResolvers<ContextType>;
  deleteOrderPayload?: DeleteOrderPayloadResolvers<ContextType>;
  ProductsConnection?: ProductsConnectionResolvers<ContextType>;
  ProductsGroupBy?: ProductsGroupByResolvers<ContextType>;
  ProductsConnectionId?: ProductsConnectionIdResolvers<ContextType>;
  ProductsConnectionCreated_at?: ProductsConnectionCreated_AtResolvers<ContextType>;
  ProductsConnectionUpdated_at?: ProductsConnectionUpdated_AtResolvers<ContextType>;
  ProductsConnectionTitle?: ProductsConnectionTitleResolvers<ContextType>;
  ProductsConnectionPrice?: ProductsConnectionPriceResolvers<ContextType>;
  ProductsConnectionDescription?: ProductsConnectionDescriptionResolvers<ContextType>;
  ProductsConnectionImage?: ProductsConnectionImageResolvers<ContextType>;
  ProductsConnectionIs_active?: ProductsConnectionIs_ActiveResolvers<ContextType>;
  ProductsAggregator?: ProductsAggregatorResolvers<ContextType>;
  ProductsAggregatorSum?: ProductsAggregatorSumResolvers<ContextType>;
  ProductsAggregatorAvg?: ProductsAggregatorAvgResolvers<ContextType>;
  ProductsAggregatorMin?: ProductsAggregatorMinResolvers<ContextType>;
  ProductsAggregatorMax?: ProductsAggregatorMaxResolvers<ContextType>;
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
