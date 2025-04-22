import cgitb
cgitb.enable()


def outputSQLQuery():
    form = cgi.FieldStorage()
    import json


    fName = form.getvalue('fName')
    lName = form.getvalue('lName')
    userIdVar = form.getvalue('registerUserId')
    passVar = form.getvalue('registerPass')
    pfpNum = form.getvalue('pfpNum')



    import mysql.connector
    cnxn = mysql.connector.connect(user='cp3schema', password='Ahsan#2007', host='database-2.cxuu8aiagwpi.us-east-1.rds.amazonaws.com', database='cp3schema')
    server = 'database-2.ct4ss8okwlue.us-east-1.rds.amazonaws.com'
    cursor = cnxn.cursor(dictionary=True)


    cursor.execute('select * from prepGoUsers where username = (%s) ', [userIdVar])
    data = cursor.fetchall()
    if data:
        print('{"result" : "false"}')
    else:

        cursor.execute("INSERT INTO prepGoUsers (username, password, first_name, last_name, default_password, profile_pic) "
                       "VALUES ((%s),(%s),(%s),(%s),(%s),(%s))", [userIdVar, passVar, fName, lName, 0, pfpNum])
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




























