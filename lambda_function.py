import json
import boto3
from time import gmtime, strftime
import uuid
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Webook_table')
def lambda_handler(event, context):
    unique_id = str(uuid.uuid4())
    now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
    try:
        username = event.get('username', '')
        useremail = event.get('useremail', '')
        usertext = event.get('usertext', '')
        response = table.put_item(
            Item={
                'ID': unique_id,
                'LatestGreetingTime': now,
                'username': username,
                'useremail': useremail,
                'usertext': usertext
            }
        )
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Data successfully written to the DynamoDB table',
                'unique_id': unique_id
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({
                'message': 'Error writing to the DynamoDB table',
                'error': str(e)
            })
        }
