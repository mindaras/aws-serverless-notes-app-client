export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-grllv11sl77h"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ls3d2vjk1a.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_WDoBuXWbL",
    APP_CLIENT_ID: "3r0ir1tocq2h1kjta4f01h355j",
    IDENTITY_POOL_ID: "us-east-2:504ff33c-2f89-4afb-94aa-b2af31806500"
  }
};
