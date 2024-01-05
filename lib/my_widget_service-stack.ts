import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
const { WidgetService } = require("../lib/widget_service");

class MyWidgetServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyWidgetServiceQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new WidgetService(this, "Widgets");
  }
}

module.exports = { MyWidgetServiceStack };
