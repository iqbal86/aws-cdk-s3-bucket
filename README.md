# Creating a serverless application using the AWS CDK S3
This example walks you through creating the resources for a simple widget dispensing service. (For the purpose of this example, a widget is just a name or identifier that can be added to, retrieved from, and deleted from a collection.) The example includes:

- An AWS Lambda function.

- An Amazon API Gateway API to call the Lambda function.

- An Amazon S3 bucket that holds the widgets.

This tutorial contains the following steps.

1. Create an AWS CDK app

2. Create a Lambda function that gets a list of widgets with HTTP GET /

3. Create the service that calls the Lambda function

4. Add the service to the AWS CDK app

5. Test the app

6. Add Lambda functions to do the following:

Create a widget with POST /{name}

Get a widget by name with GET /{name}

Delete a widget by name with DELETE /{name}

Tear everything down when you're finished
