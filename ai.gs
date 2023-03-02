function ai(message) {
  var apiUrl = "https://api.openai.com/v1/chat/completions";
  // You can create API key here: https://platform.openai.com/account/api-keys
  var openaiApiKey = "YOUR-OPENAI-API-KEY";

  var requestData = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": message}]
  };

  var headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + openaiApiKey
  };
  
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'headers': headers,
    'payload': JSON.stringify(requestData)
  };
  
  var response = UrlFetchApp.fetch(apiUrl, options);
  var parseJS = response.getContentText()
  var jsonObject = JSON.parse(parseJS);
  var content = jsonObject.choices[0].message.content;

  return content;
}
