import re

def validate_reg_data(data_object):
    if (not data_object[0] or  not data_object[1] or not data_object[2] or not data_object[3] or not data_object[4] or not data_object[5]):
        return "Non of the feilds can be empty!!!!"
    elif (data_object[3].isdigit() or data_object[2].isdigit() or data_object[0].isdigit()):
        return "The feilds name, city, district cannot be numeric !!!!"
    elif (len(data_object[5])<8):
        return "The passowrd should contain atleast 8 charcters with !!!!"
    elif not (re.search("[A-Z]", data_object[5])):
        return "The password ahould contain atleast one upper case letter !!!!"
    elif not (re.search("[0-9]", data_object[5])):
        return "The password ahould contain atleast one integer !!!!"
    else:
        return "valid"

def validate_pro_data(data_object):
    if (not data_object[0] or not data_object[1] or not data_object[2] or not data_object[3]):
        return "Non of the feilds cannot be empty !!!!"
    elif (data_object[1].isdigit()):
        return "The name cannot be numeric !!!!"
    elif (not data_object[3].isdigit()):
        return "Amount should be a positive integer !!!!"
    # elif (int(data_object[3])<0 ):
    #     return "Amount cannot take a negative value !!!!"
    else:
        return "valid"