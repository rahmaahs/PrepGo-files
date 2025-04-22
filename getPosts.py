import cgitb
cgitb.enable()

def outputSQLQuery():

    form = cgi.FieldStorage()

    Username = form.getvalue('Username')
    import json
    import mysql.connector
    cnxn = mysql.connector.connect(user='cp3schema', password='Ahsan#2007', host='database-2.cxuu8aiagwpi.us-east-1.rds.amazonaws.com', database='cp3schema')
    server = 'database-2.ct4ss8okwlue.us-east-1.rds.amazonaws.com'
    cursor = cnxn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM prepGoPosts ORDER BY time DESC', [])
    data = cursor.fetchall()
    if data:
        print(f"{json.dumps(data)}")
    else:
        print('[]')





try:
    import cgi
    print("Content-type: text/html\n\n")   # say generating html

    outputSQLQuery()
except:
    import cgi
    cgitb.handler()
    cgi.print_exception()                 # catch and print errors


