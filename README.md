# rvUploader
Angular app to parse rv csv data and display in a table on ui

Instead of using a library to parse the CSV file I went with a dynamic manual approach.
For the ascending and descending filtering of values in the table I went for a directive approach.
When it came to searching for values within the table I used the pipe approach with a reactive form.
Also added functionality to clear table and export to JSON format to serve to backend incase of future implimentation.
