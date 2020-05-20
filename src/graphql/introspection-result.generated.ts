/* tslint-disable */
/* eslint-disable */

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Morph",
        "possibleTypes": [
          {
            "name": "UsersPermissionsMe"
          },
          {
            "name": "UsersPermissionsMeRole"
          },
          {
            "name": "UsersPermissionsLoginPayload"
          },
          {
            "name": "ForgotPassword"
          },
          {
            "name": "Cities"
          },
          {
            "name": "CitiesConnection"
          },
          {
            "name": "CitiesAggregator"
          },
          {
            "name": "CitiesGroupBy"
          },
          {
            "name": "CitiesConnectionId"
          },
          {
            "name": "CitiesConnectionCreated_at"
          },
          {
            "name": "CitiesConnectionUpdated_at"
          },
          {
            "name": "CitiesConnectionName"
          },
          {
            "name": "CitiesConnectionIs_active"
          },
          {
            "name": "createCityPayload"
          },
          {
            "name": "updateCityPayload"
          },
          {
            "name": "deleteCityPayload"
          },
          {
            "name": "Orders"
          },
          {
            "name": "OrdersConnection"
          },
          {
            "name": "OrdersAggregator"
          },
          {
            "name": "OrdersAggregatorSum"
          },
          {
            "name": "OrdersAggregatorAvg"
          },
          {
            "name": "OrdersAggregatorMin"
          },
          {
            "name": "OrdersAggregatorMax"
          },
          {
            "name": "OrdersGroupBy"
          },
          {
            "name": "OrdersConnectionId"
          },
          {
            "name": "OrdersConnectionCreated_at"
          },
          {
            "name": "OrdersConnectionUpdated_at"
          },
          {
            "name": "OrdersConnectionName"
          },
          {
            "name": "OrdersConnectionPhone"
          },
          {
            "name": "OrdersConnectionDeliveryDate"
          },
          {
            "name": "OrdersConnectionCity"
          },
          {
            "name": "OrdersConnectionIs_paid"
          },
          {
            "name": "createOrderPayload"
          },
          {
            "name": "updateOrderPayload"
          },
          {
            "name": "deleteOrderPayload"
          },
          {
            "name": "Products"
          },
          {
            "name": "ProductsConnection"
          },
          {
            "name": "ProductsAggregator"
          },
          {
            "name": "ProductsAggregatorSum"
          },
          {
            "name": "ProductsAggregatorAvg"
          },
          {
            "name": "ProductsAggregatorMin"
          },
          {
            "name": "ProductsAggregatorMax"
          },
          {
            "name": "ProductsGroupBy"
          },
          {
            "name": "ProductsConnectionId"
          },
          {
            "name": "ProductsConnectionCreated_at"
          },
          {
            "name": "ProductsConnectionUpdated_at"
          },
          {
            "name": "ProductsConnectionTitle"
          },
          {
            "name": "ProductsConnectionPrice"
          },
          {
            "name": "ProductsConnectionDescription"
          },
          {
            "name": "ProductsConnectionImage"
          },
          {
            "name": "ProductsConnectionIs_active"
          },
          {
            "name": "createProductPayload"
          },
          {
            "name": "updateProductPayload"
          },
          {
            "name": "deleteProductPayload"
          },
          {
            "name": "UploadFile"
          },
          {
            "name": "UploadFileConnection"
          },
          {
            "name": "UploadFileAggregator"
          },
          {
            "name": "UploadFileAggregatorSum"
          },
          {
            "name": "UploadFileAggregatorAvg"
          },
          {
            "name": "UploadFileAggregatorMin"
          },
          {
            "name": "UploadFileAggregatorMax"
          },
          {
            "name": "UploadFileGroupBy"
          },
          {
            "name": "UploadFileConnectionId"
          },
          {
            "name": "UploadFileConnectionCreated_at"
          },
          {
            "name": "UploadFileConnectionUpdated_at"
          },
          {
            "name": "UploadFileConnectionName"
          },
          {
            "name": "UploadFileConnectionAlternativeText"
          },
          {
            "name": "UploadFileConnectionCaption"
          },
          {
            "name": "UploadFileConnectionWidth"
          },
          {
            "name": "UploadFileConnectionHeight"
          },
          {
            "name": "UploadFileConnectionFormats"
          },
          {
            "name": "UploadFileConnectionHash"
          },
          {
            "name": "UploadFileConnectionExt"
          },
          {
            "name": "UploadFileConnectionMime"
          },
          {
            "name": "UploadFileConnectionSize"
          },
          {
            "name": "UploadFileConnectionUrl"
          },
          {
            "name": "UploadFileConnectionPreviewUrl"
          },
          {
            "name": "UploadFileConnectionProvider"
          },
          {
            "name": "UploadFileConnectionProvider_metadata"
          },
          {
            "name": "UsersPermissionsPermission"
          },
          {
            "name": "UsersPermissionsRole"
          },
          {
            "name": "UsersPermissionsRoleConnection"
          },
          {
            "name": "UsersPermissionsRoleAggregator"
          },
          {
            "name": "UsersPermissionsRoleGroupBy"
          },
          {
            "name": "UsersPermissionsRoleConnectionId"
          },
          {
            "name": "UsersPermissionsRoleConnectionName"
          },
          {
            "name": "UsersPermissionsRoleConnectionDescription"
          },
          {
            "name": "UsersPermissionsRoleConnectionType"
          },
          {
            "name": "createRolePayload"
          },
          {
            "name": "updateRolePayload"
          },
          {
            "name": "deleteRolePayload"
          },
          {
            "name": "UsersPermissionsUser"
          },
          {
            "name": "UsersPermissionsUserConnection"
          },
          {
            "name": "UsersPermissionsUserAggregator"
          },
          {
            "name": "UsersPermissionsUserGroupBy"
          },
          {
            "name": "UsersPermissionsUserConnectionId"
          },
          {
            "name": "UsersPermissionsUserConnectionCreated_at"
          },
          {
            "name": "UsersPermissionsUserConnectionUpdated_at"
          },
          {
            "name": "UsersPermissionsUserConnectionUsername"
          },
          {
            "name": "UsersPermissionsUserConnectionEmail"
          },
          {
            "name": "UsersPermissionsUserConnectionProvider"
          },
          {
            "name": "UsersPermissionsUserConnectionConfirmed"
          },
          {
            "name": "UsersPermissionsUserConnectionBlocked"
          },
          {
            "name": "UsersPermissionsUserConnectionRole"
          },
          {
            "name": "createUserPayload"
          },
          {
            "name": "updateUserPayload"
          },
          {
            "name": "deleteUserPayload"
          }
        ]
      }
    ]
  }
};
      export default result;
    

