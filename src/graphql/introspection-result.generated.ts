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
            "name": "City"
          },
          {
            "name": "CityConnection"
          },
          {
            "name": "CityAggregator"
          },
          {
            "name": "CityGroupBy"
          },
          {
            "name": "CityConnectionId"
          },
          {
            "name": "CityConnectionCreated_at"
          },
          {
            "name": "CityConnectionUpdated_at"
          },
          {
            "name": "CityConnectionName"
          },
          {
            "name": "CityConnectionIs_active"
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
            "name": "DeliveryDate"
          },
          {
            "name": "DeliveryDateConnection"
          },
          {
            "name": "DeliveryDateAggregator"
          },
          {
            "name": "DeliveryDateGroupBy"
          },
          {
            "name": "DeliveryDateConnectionId"
          },
          {
            "name": "DeliveryDateConnectionCreated_at"
          },
          {
            "name": "DeliveryDateConnectionUpdated_at"
          },
          {
            "name": "DeliveryDateConnectionTitle"
          },
          {
            "name": "DeliveryDateConnectionDeliveryDate"
          },
          {
            "name": "createDeliveryDatePayload"
          },
          {
            "name": "updateDeliveryDatePayload"
          },
          {
            "name": "deleteDeliveryDatePayload"
          },
          {
            "name": "Order"
          },
          {
            "name": "OrderConnection"
          },
          {
            "name": "OrderAggregator"
          },
          {
            "name": "OrderAggregatorSum"
          },
          {
            "name": "OrderAggregatorAvg"
          },
          {
            "name": "OrderAggregatorMin"
          },
          {
            "name": "OrderAggregatorMax"
          },
          {
            "name": "OrderGroupBy"
          },
          {
            "name": "OrderConnectionId"
          },
          {
            "name": "OrderConnectionCreated_at"
          },
          {
            "name": "OrderConnectionUpdated_at"
          },
          {
            "name": "OrderConnectionName"
          },
          {
            "name": "OrderConnectionCity"
          },
          {
            "name": "OrderConnectionTotal"
          },
          {
            "name": "OrderConnectionIs_paid"
          },
          {
            "name": "OrderConnectionPhone"
          },
          {
            "name": "OrderConnectionDelivery_date"
          },
          {
            "name": "OrderConnectionDeliveryDate"
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
            "name": "Orderproduct"
          },
          {
            "name": "OrderproductConnection"
          },
          {
            "name": "OrderproductAggregator"
          },
          {
            "name": "OrderproductAggregatorSum"
          },
          {
            "name": "OrderproductAggregatorAvg"
          },
          {
            "name": "OrderproductAggregatorMin"
          },
          {
            "name": "OrderproductAggregatorMax"
          },
          {
            "name": "OrderproductGroupBy"
          },
          {
            "name": "OrderproductConnectionId"
          },
          {
            "name": "OrderproductConnectionCreated_at"
          },
          {
            "name": "OrderproductConnectionUpdated_at"
          },
          {
            "name": "OrderproductConnectionProduct"
          },
          {
            "name": "OrderproductConnectionPrice"
          },
          {
            "name": "OrderproductConnectionQuantity"
          },
          {
            "name": "OrderproductConnectionOrder_id"
          },
          {
            "name": "createOrderproductPayload"
          },
          {
            "name": "updateOrderproductPayload"
          },
          {
            "name": "deleteOrderproductPayload"
          },
          {
            "name": "Product"
          },
          {
            "name": "ProductConnection"
          },
          {
            "name": "ProductAggregator"
          },
          {
            "name": "ProductAggregatorSum"
          },
          {
            "name": "ProductAggregatorAvg"
          },
          {
            "name": "ProductAggregatorMin"
          },
          {
            "name": "ProductAggregatorMax"
          },
          {
            "name": "ProductGroupBy"
          },
          {
            "name": "ProductConnectionId"
          },
          {
            "name": "ProductConnectionCreated_at"
          },
          {
            "name": "ProductConnectionUpdated_at"
          },
          {
            "name": "ProductConnectionTitle"
          },
          {
            "name": "ProductConnectionPrice"
          },
          {
            "name": "ProductConnectionImage"
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
    

