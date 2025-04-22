import cgitb
cgitb.enable()

def outputSQLQuery():
    import json

    form = cgi.FieldStorage()
    pfpNumber = form.getvalue('pfpNumber')
    Username = form.getvalue('Username')


    import mysql.connector
    cnxn = mysql.connector.connect(user='cp3schema', password='Ahsan#2007', host='database-2.cxuu8aiagwpi.us-east-1.rds.amazonaws.com', database='cp3schema')
    server = 'database-2.ct4ss8okwlue.us-east-1.rds.amazonaws.com'
    cursor = cnxn.cursor(dictionary=True)
    cursor.execute('UPDATE prepGoUsers SET profile_pic = (%s) WHERE username LIKE (%s)', [pfpNumber, Username])
    cnxn.commit()


    print('{"result": "5"}')


try:
    import cgi
    print("Content-type: text/html\n\n")   # say generating html
    outputSQLQuery()
except:
    import cgi
    cgitb.handler()
    cgi.print_exception()                 # catch and print errors









