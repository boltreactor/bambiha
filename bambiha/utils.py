
import datetime
import jwt


def get_token(user):
    payload = {
        'user_id': user.key.urlsafe().decode(),
        'username': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'country': user.country,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=10)
    }
    token = jwt.encode(payload, "secret", algorithm="HS256")
    return token


def make_ndb_return_data_json_serializable(data):
    """Build a new dict so that the data can be JSON serializable"""
    result = data.to_dict()
    record = {}
    # Populate the new dict with JSON serializiable values
    for key in result:
        if key == 'date_of_birth':
            record[key] = result[key].isoformat()
            continue
        if isinstance(result[key], datetime.datetime):
            record[key] = result[key].isoformat()
            continue
        record[key] = result[key]
    # Add the key so that we have a reference to the record
    record['id'] = data.key.urlsafe().decode()
    return record


def to_json_ndb(qry):
    """
    Send NDB query result to serialize function if single result,
    else loop through the query result and serialize records one by one
    """
    if qry is None:
        return None
    result = []

    # check if qry is a list (multiple records) or not (single record)
    if type(qry) != list:
        record = make_ndb_return_data_json_serializable(qry)
        return record

    for q in qry:
        result.append(make_ndb_return_data_json_serializable(q))

    return result
