import cgitb
cgitb.enable()


def outputSQLQuery():
    form = cgi.FieldStorage()
    import json

    postIdVar = form.getvalue('enterMessage')
    userId = form.getvalue('Username')
    theTimeId = form.getvalue('currentDateTime')
    userImg = form.getvalue('userImg')





    import mysql.connector
    cnxn = mysql.connector.connect(user='cp3schema', password='Ahsan#2007', host='database-2.cxuu8aiagwpi.us-east-1.rds.amazonaws.com', database='cp3schema')
    server = 'database-2.ct4ss8okwlue.us-east-1.rds.amazonaws.com'
    cursor = cnxn.cursor(dictionary=True)
    cursor.execute("INSERT INTO prepGoPosts (pContent, uid, time, pfp) "
                   "VALUES ((%s),(%s),(%s),(%s))", [postIdVar, userId, theTimeId, userImg])
    cnxn.commit()

    print('{"result" : "true"}')


try:
    import cgi
    print("Content-type: text/html\n\n")   # say generating html
    outputSQLQuery()
except:
    import cgi
    cgitb.handler()
    cgi.print_exception()                 # catch and print errors




















