define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Post User Login",
    "name": "PostLogin",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the existant user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the existant user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"doctest@example.com\",\n  \"password\": \"blahblahblah\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object with the user id and username and token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"fn9837f987fnh3987fn48fng98h\",\n  \"id\": 3,\n  \"email\": \"doctest@example.com\",\n  \"first_name\": \"Doc\",\n  \"last_name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The username or password is missing.</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>The user couldn't be logged in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"missing email or password\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Couldn't connect to login service\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouterDocs.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/",
    "title": "Post Token For Verification",
    "name": "PostTokenForVerification",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user's token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"token\": \"1f1n3h87fh1938rfng9387fn\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object with the user id and username and token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"doctest@example.com\",\n  \"id\": 3,\n  \"photo\": null,\n  \"first_name\": \"Doc\",\n  \"last_name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The token is missing.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "Verify-Error",
            "description": "<p>Token does not exist</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "User-Not-Found",
            "description": "<p>The User Wasn't Found for the Token.</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"No token provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Verify-Error:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Token does not exist\"\n}",
          "type": "json"
        },
        {
          "title": "404-User-Not-Found:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"No such user found\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Internal server error, could not retrieve user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouterDocs.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Post User Registration",
    "name": "PostUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first_name of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The last_name of the new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"doctest@example.com\",\n  \"password\": \"blahblahblah\",\n  \"first_name\": \"Doc\",\n  \"last_name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object with the user id, email and token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"token\": \"fn9837f987fnh3987fn48fng98h\",\n  \"id\": 3,\n  \"email\": \"doctest@example.com\",\n  \"first_name\": \"Doc\",\n  \"last_name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The username or password is missing.</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "Object",
            "optional": false,
            "field": "duplicate-email-error",
            "description": "<p>The email is already registered</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>The user couldn't be registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"email, password, first_name, and last_name are required\"\n}",
          "type": "json"
        },
        {
          "title": "409-Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n \"message\": \"A user with that email already exists\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouterDocs.js",
    "groupTitle": "Authentication"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_Kaw_Documents_Labs_didact_be_docs_main_js",
    "groupTitle": "C__Users_Kaw_Documents_Labs_didact_be_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/courses/checkdb",
    "title": "Check Database For Course With Link",
    "name": "CheckDatabaseForCourseWithLink",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>The link of the course you want to check</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Check-Database-For-Link-Example:",
          "content": "{ \n\t \"link\": \"fakelink.com\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "CourseFoundObject",
            "description": "<p>an object detailing whether the course was found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"courseFound\": false,\n       \"id\": -1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not get courses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not get courses\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to get courses for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id",
    "title": "Delete Course",
    "name": "DeleteCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>A message that the course was deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"course deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The user is not authorized to delete this course</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The course with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to delete course for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Delete-Course-Error",
            "description": "<p>Could not delete course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to change this course\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to delete course for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Course-Delete-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not delete course\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id/tags",
    "title": "Delete Tag From Course",
    "name": "DeleteTagFromCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the tag you want to delete from the course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tag Delete Example:",
          "content": "{ \n        tag: 'Learning'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the tag was removed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    message: 'tag removed from course'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Tag-Data",
            "description": "<p>The tag data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The user is not authorized to remove tag from this course</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The course with id sent was not found in database</p>"
          },
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "tag-not-found-error",
            "description": "<p>The tag with the name sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to remove tag for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Delete-Tag-Error",
            "description": "<p>Could not remove tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Tag Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing tag data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to remove tags from this course\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Tag not found\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to remove tag for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Tag-Remove-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not remove from course\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "/api/courses/:id",
    "title": "Edit Course",
    "name": "EditCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>A message that the course was updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"course updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Course-Data",
            "description": "<p>The course data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The user is not authorized to edit this course</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The course with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to edit course for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Edit-Course-Error",
            "description": "<p>Could not edit course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Course-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing course data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to change this course\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to edit course for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Course-Edit-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not edit course\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/allyours",
    "title": "Get All Courses That User Is Signed Up For",
    "name": "GetAllCoursesForUser",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Courses",
            "description": "<p>An array of the courses for the user on the website</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Learning How to Learn\",\n    \"link\": \"https://www.coursera.org/learn/learning-how-to-learn\",\n    \"description\": \"This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines. We???ll learn about the how the brain uses two very different learning modes and how it encapsulates (???chunks???) information. We???ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects.\\n\\nUsing these approaches, no matter what your skill levels in topics you would like to master, you can change your thinking and change your life. If you???re already an expert, this peep under the mental hood will give you ideas for: turbocharging successful learning, including counter-intuitive test-taking tips and insights that will help you make the best use of your time on homework and problem sets. If you???re struggling, you???ll see a structured treasure trove of practical techniques that walk you through what you need to do to get on track. If you???ve ever wanted to become better at anything, this course will help serve as your guide.\",\n    \"category\": null,\n    \"creator_id\": 1,\n    \"foreign_rating\": \"4.8 stars\",\n    \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski\",\n    \"manually_completed\": 0,\n    \"automatically_completed\": 0\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential\",\n    \"link\": \"https://www.coursera.org/learn/mindshift\",\n    \"description\": \"Mindshift is designed to help boost your career and life in today???s fast-paced learning environment. Whatever your age or stage, Mindshift teaches you essentials such as how to get the most out of online learning and MOOCs, how to seek out and work with mentors, the secrets to avoiding career ruts (and catastrophes) and general ruts in life, and insights such as the value of selective ignorance over general competence.  We???ll provide practical insights from science about how to learn and change effectively even in maturity, and we???ll build on what you already know to take your life???s learning in fantastic new directions.  This course is designed to show you how to look at what you???re learning, and your place in what???s unfolding in the society around you, so you can be what you want to be, given the real world constraints that life puts on us all. You???ll see that by using certain mental tools and insights, you can learn and do more???far more???than you might have ever dreamed! This course can be taken independent of, concurrent with, or subsequent to, its companion course, Learning How to Learn. (Mindshift is more career focused, and Learning How to Learn is more learning focused.)\",\n    \"category\": null,\n    \"creator_id\": 1,\n    \"foreign_rating\": \"4.8 stars\",\n    \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski, M.S. Orlando Trejo\",\n    \"manually_completed\": 0,\n    \"automatically_completed\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve courses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not get all courses\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:id",
    "title": "Get Course by ID",
    "name": "GetCourseByID",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "Course",
            "description": "<p>An object of the course matching the id param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"id\": 1,\n    \"name\": \"Learning How to Learn: Powerful mental tools to help you master tough subjects\",\n    \"link\": \"https://www.coursera.org/learn/learning-how-to-learn\",\n    \"description\": \"This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines. We???ll learn about the how the brain uses two very different learning modes and how it encapsulates (???chunks???) information. We???ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects.\\n\\nUsing these approaches, no matter what your skill levels in topics you would like to master, you can change your thinking and change your life. If you???re already an expert, this peep under the mental hood will give you ideas for: turbocharging successful learning, including counter-intuitive test-taking tips and insights that will help you make the best use of your time on homework and problem sets. If you???re struggling, you???ll see a structured treasure trove of practical techniques that walk you through what you need to do to get on track. If you???ve ever wanted to become better at anything, this course will help serve as your guide.\",\n    \"category\": null,\n    \"creator_id\": 1,\n    \"foreign_rating\": \"4.8 stars\",\n    \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "Course-Not-Found",
            "description": "<p>The course isn't in the database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Course Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:id/yours",
    "title": "Get Course by ID The User Is In Learning Path For",
    "name": "GetCourseByIDYours",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "Course",
            "description": "<p>An object of the course matching the id param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 2,\n  \"name\": \"Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential\",\n  \"link\": \"https://www.coursera.org/learn/mindshift\",\n  \"description\": \"Mindshift is designed to help boost your career and life in today???s fast-paced learning environment. Whatever your age or stage, Mindshift teaches you essentials such as how to get the most out of online learning and MOOCs, how to seek out and work with mentors, the secrets to avoiding career ruts (and catastrophes) and general ruts in life, and insights such as the value of selective ignorance over general competence.  We???ll provide practical insights from science about how to learn and change effectively even in maturity, and we???ll build on what you already know to take your life???s learning in fantastic new directions.  This course is designed to show you how to look at what you???re learning, and your place in what???s unfolding in the society around you, so you can be what you want to be, given the real world constraints that life puts on us all. You???ll see that by using certain mental tools and insights, you can learn and do more???far more???than you might have ever dreamed! This course can be taken independent of, concurrent with, or subsequent to, its companion course, Learning How to Learn. (Mindshift is more career focused, and Learning How to Learn is more learning focused.)\",\n  \"category\": null,\n  \"creator_id\": 1,\n  \"foreign_rating\": \"4.8 stars\",\n  \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski, M.S. Orlando Trejo\",\n  \"tags\": [\n    \"Video\",\n    \"Coursera\",\n    \"Free\"\n  ],\n  \"total\": 69,\n  \"completed\": 0,\n  \"manually_completed\": 0,\n  \"automatically_completed\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "Course-Not-Found",
            "description": "<p>The course isn't in the database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Course Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses",
    "title": "Get Courses",
    "name": "GetCourses",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The link of the course you want to find (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>An tag to filter the courses you want to find (optional)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get Course By URL",
          "content": "{\n\t\"url\": \"https://www.coursera.org/learn/learning-how-to-learn\"\n}",
          "type": "json"
        },
        {
          "title": "Get Courses By Tag",
          "content": "{\n\t\"tag\": \"Something else\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Courses",
            "description": "<p>An array of the courses on the website, optionally filtered by url sent in body</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Learning How to Learn\",\n    \"link\": \"https://www.coursera.org/learn/learning-how-to-learn\",\n    \"description\": \"This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines. We???ll learn about the how the brain uses two very different learning modes and how it encapsulates (???chunks???) information. We???ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects.\\n\\nUsing these approaches, no matter what your skill levels in topics you would like to master, you can change your thinking and change your life. If you???re already an expert, this peep under the mental hood will give you ideas for: turbocharging successful learning, including counter-intuitive test-taking tips and insights that will help you make the best use of your time on homework and problem sets. If you???re struggling, you???ll see a structured treasure trove of practical techniques that walk you through what you need to do to get on track. If you???ve ever wanted to become better at anything, this course will help serve as your guide.\",\n    \"category\": null,\n    \"creator_id\": 1,\n    \"foreign_rating\": \"4.8 stars\",\n    \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski\"\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential\",\n    \"link\": \"https://www.coursera.org/learn/mindshift\",\n    \"description\": \"Mindshift is designed to help boost your career and life in today???s fast-paced learning environment. Whatever your age or stage, Mindshift teaches you essentials such as how to get the most out of online learning and MOOCs, how to seek out and work with mentors, the secrets to avoiding career ruts (and catastrophes) and general ruts in life, and insights such as the value of selective ignorance over general competence.  We???ll provide practical insights from science about how to learn and change effectively even in maturity, and we???ll build on what you already know to take your life???s learning in fantastic new directions.  This course is designed to show you how to look at what you???re learning, and your place in what???s unfolding in the society around you, so you can be what you want to be, given the real world constraints that life puts on us all. You???ll see that by using certain mental tools and insights, you can learn and do more???far more???than you might have ever dreamed! This course can be taken independent of, concurrent with, or subsequent to, its companion course, Learning How to Learn. (Mindshift is more career focused, and Learning How to Learn is more learning focused.)\",\n    \"category\": null,\n    \"creator_id\": 1,\n    \"foreign_rating\": \"4.8 stars\",\n    \"foreign_instructors\": \"Dr. Barbara Oakley, Dr. Terrence Sejnowski, M.S. Orlando Trejo\"\n  },\n  {\n    \"id\": 3,\n    \"name\": \"AbyssMind Performance Email Course\",\n    \"link\": \"https://www.abyssmind.com/performance/try](https://www.abyssmind.com/performance/try\",\n    \"description\": \"AbyssMind is a learning outcomes program that helps you understand the skills and techniques needed to succeed in your self-directed learning ambitions.  Sign up\",\n    \"category\": null,\n    \"creator_id\": 2,\n    \"foreign_rating\": null,\n    \"foreign_instructors\": \"AbyssMind\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve courses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses",
    "title": "Post Course",
    "name": "PostCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the course you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the course you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>The link of the course you want to create</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Course-Post-Example:",
          "content": "{ \n\t \"name\": \"Learn How to Write Docs\",\n\t \"description\": \"In this course, you will learn the tedium of writing docs.\",\n\t \"link\": \"http://apidocjs.com/\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the course that the user posted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    \"id\": 2\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Course-Data",
            "description": "<p>The course data is absent</p>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Course-Name",
            "description": "<p>The course name is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add course for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Course-Error",
            "description": "<p>Could not add course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Course-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing course data\"\n}",
          "type": "json"
        },
        {
          "title": "400-Name-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Course name is required\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add course for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Course-Add-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not add course\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/tags",
    "title": "Post Tag To Course",
    "name": "PostTagToCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the tag you want to create/add for the course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tag Post Example:",
          "content": "{ \n        tag: 'Learning'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the tag was added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    message: 'tag added to course'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Tag-Data",
            "description": "<p>The tag data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The user is not authorized to add tag to this course</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The course with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add tag for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Tag-Error",
            "description": "<p>Could not add tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Tag Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing tag data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to add tags to this course\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No course found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add tag for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Tag-Add-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not add tag to course\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/udemy",
    "title": "Post Udemy Course",
    "name": "PostUdemyCourse",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>The link of the course you want to create</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Course-Post-Example:",
          "content": "{\n\t \"link\": \"https://www.udemy.com/course/complete-react-developer-zero-to-mastery/\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Course",
            "description": "<p>The course generated by the posted link, along with a message that the course already exists</p>"
          }
        ],
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "Course",
            "description": "<p>The course generated by the posted link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"id\": 4,\n  \"name\": \"JavaScript Animations with GreenSock (GSAP)\",\n  \"link\": \"https://www.udemy.com/course/javascript-animations-using-greensock/\",\n  \"description\": null,\n  \"category\": null,\n  \"creator_id\": 2,\n  \"foreign_rating\": null,\n  \"foreign_instructors\": \"David Sharkey\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Course already exists in Database\",\n  \"course\": {\n    \"id\": 4,\n    \"name\": \"JavaScript Animations with GreenSock (GSAP)\",\n    \"link\": \"https://www.udemy.com/course/javascript-animations-using-greensock/\",\n    \"description\": null,\n    \"category\": null,\n    \"creator_id\": 2,\n    \"foreign_rating\": null,\n    \"foreign_instructors\": \"David Sharkey\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Link",
            "description": "<p>The course link is absent</p>"
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "Not-Udemy",
            "description": "<p>The course link is not from Udemy</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Retrieve-Details-Error",
            "description": "<p>Could not retrieve course details</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Course-Error",
            "description": "<p>Could not add course</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Retrieve-Course-Error",
            "description": "<p>could not retrieve course</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add course for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Course-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"No link present in post body\"\n}",
          "type": "json"
        },
        {
          "title": "400-Not-Udemy:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Not a Udemy Link\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Retrieve-Details-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"error: could not retrieve course details\"\n}",
          "type": "json"
        },
        {
          "title": "500-Add-Course-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"internal error, could not add course\"\n}",
          "type": "json"
        },
        {
          "title": "500-Retrieve-Course-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"error: could not retrieve course\"\n}",
          "type": "json"
        },
        {
          "title": "500-Find-User-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add Udemy course for\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/udemyCourseRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "/api/courses/:id/togglecomplete",
    "title": "Toggle Course Completion",
    "name": "ToggleCourseCompletion",
    "group": "Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n    \"message\": \"Course completion toggled\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to update course for HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Could not find user to update course for&quot; }</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Toggle-Course-Error",
            "description": "<p>Internal Error: Could not toggle course completion HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Internal Error: Could not toggle course completion&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id/sections/:section_id/details/:detail_id",
    "title": "Delete Course Section Details",
    "name": "DeleteCourseSectionDetails",
    "group": "Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 \n{\n    \"message\": \"Detail has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a detail with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not delete detail from section</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Detail 2 not found in Section 4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Details"
  },
  {
    "type": "get",
    "url": "/api/courses/:id/sections/:s_id",
    "title": "Get Section Details",
    "name": "GetSectionDetails",
    "group": "Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Sections",
            "description": "<p>an array of the course sections</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK   \n  {\n      \"courseSection\": [\n          {\n              \"id\": 59,\n              \"name\": \"How to Become a Better Learner\",\n              \"course_sections_id\": 4,\n              \"description\": \"\",\n              \"link\": \"https://www.coursera.org/learn/learning-how-to-learn/lecture/f839b/how-to-become-a-better-learner\",\n              \"type\": \"video\",\n              \"order\": 1\n          },\n          {\n              \"id\": 60,\n              \"name\": \"Introduction to Renaissance Learning and Unlocking Your Potential\",\n              \"course_sections_id\": 4,\n              \"description\": \"\",\n              \"link\": \"https://www.coursera.org/learn/learning-how-to-learn/lecture/SIck3/introduction-to-renaissance-learning-and-unlocking-your-potential\",\n              \"type\": \"video\",\n              \"order\": 2\n          }\n      ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a detail with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find detail to get course for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"could not find a detail with an id of 4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Details"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/sections/:s_id",
    "title": "Post Section Details",
    "name": "PostSectionDetails",
    "group": "Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "Created",
            "description": "<p>message with id returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"message\": \"Detail has been added with an id of 7\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not post Detail to section</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Details"
  },
  {
    "type": "put",
    "url": "/api/courses/:id/sections/:section_id/details/:detail_id",
    "title": "Put Section Details",
    "name": "PutSectionDetails",
    "group": "Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n    \"message\": \"Detail has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Section-Changes",
            "description": "<p>The section changes are absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a Detail with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not update detail from section</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Section-Changes-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Could not find changes in body\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Detail 5 not found in Section 3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Details"
  },
  {
    "type": "put",
    "url": "/api/courses/:id/sections/:section_id/details/:detail_id/togglecomplete",
    "title": "Toggle Lesson Completion",
    "name": "ToggleLessonCompletion",
    "group": "Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n    \"message\": \"Lesson completion toggled\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to update lesson for HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Could not find user to update lesson for&quot; }</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Toggle-Lesson-Error",
            "description": "<p>Internal Error: Could not toggle lesson completion HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Internal Error: Could not toggle lesson completion&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Details"
  },
  {
    "type": "post",
    "url": "/api/auth/emaillist",
    "title": "Post Email Address To List",
    "name": "PostEmailAddressToList",
    "group": "EmailList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user's email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"fakename@fakemail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message that the email was already in the list</p>"
          }
        ],
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message that the email has been added to the list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Email was already in database\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Email has been added to list\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The email is missing.</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not add email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Must send email\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Internal Error: Could not add email\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouterDocs.js",
    "groupTitle": "EmailList"
  },
  {
    "type": "delete",
    "url": "/api/learning-paths/:id/path-items/:itemId",
    "title": "Delete Learning Path Item",
    "name": "DeleteLearningPathItem",
    "group": "Learning_Path_Items",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the Learning Path Item that the user deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"path item with id 4 deleted\",\n  \"id\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Not-Authorized",
            "description": "<p>Could not delete Learning Path item, user not authorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "Find-Path-Error",
            "description": "<p>Could not find Learning Path to delete Learning Path Item for</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to delete Learning Path Item for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Delete-Learning-Path-Item-Error",
            "description": "<p>Could not add Learning Path Item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to delete Learning Path Item for\"\n}",
          "type": "json"
        },
        {
          "title": "404-Path-Not-Found:",
          "content": "HTTP/1.1 404 Internal Server Error\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "403-Not-Authorized-Found:",
          "content": "HTTP/1.1 403 Internal Server Error\n{\n \"message\": \"User is not permitted to change this path item\"\n}",
          "type": "json"
        },
        {
          "title": "500-Delete-Learning-Path-Item-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not delete Learning Path Item\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Path_Items"
  },
  {
    "type": "post",
    "url": "/api/learning-paths/:id/path-items",
    "title": "Post Learning Path Item",
    "name": "PostLearningPathItem",
    "group": "Learning_Path_Items",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>The link of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "path_order",
            "description": "<p>The order of the Learning Path Item in the path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Learning Path Item-Post-Example:",
          "content": "{ \n\t \"name\": \"apidoc video\",\n\t \"description\": \"In this Learning Path Item, you will learn the tedium of writing docs.\",\n\t \"category\": \"Docs\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the Learning Path Item that the user posted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"item added to path\",\n  \"id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Learning-Path-Item-Data",
            "description": "<p>The Learning Path Item data is absent</p>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Learning-Path-Item-Name",
            "description": "<p>The Learning Path Item name is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Not-Authorized",
            "description": "<p>Could not add Learning Path item, user not authorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "Find-Path-Error",
            "description": "<p>Could not find Learning Path to add Learning Path Item for</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add Learning Path Item for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Learning-Path-Item-Error",
            "description": "<p>Could not add Learning Path Item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Learning Path Item-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing Learning Path Item data\"\n}",
          "type": "json"
        },
        {
          "title": "400-Name-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Learning Path Item name is required\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add Learning Path Item for\"\n}",
          "type": "json"
        },
        {
          "title": "404-Path-Not-Found:",
          "content": "HTTP/1.1 404 Internal Server Error\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "403-Not-Authorized-Found:",
          "content": "HTTP/1.1 403 Internal Server Error\n{\n \"message\": \"User is not permitted to change this path\"\n}",
          "type": "json"
        },
        {
          "title": "500-Learning-Path-Add-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not add Learning Path Item\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Path_Items"
  },
  {
    "type": "put",
    "url": "/api/learning-paths/:id/path-items/:itemId/yours",
    "title": "Toggle Learning Path Item Completion",
    "name": "ToggleLearningPathItemCompletion",
    "group": "Learning_Path_Items",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message that the learning path item completion has been toggled</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Learning path item completion has been toggled\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to complete learning path Item for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Complete-Learning-Path-Item-Error",
            "description": "<p>Could not complete learning path Item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to complete learning path Item for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Complete-Learning-Path-Item-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not complete learning path Item\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Path_Items"
  },
  {
    "type": "put",
    "url": "/api/learning-paths/:id/path-items/:itemId",
    "title": "Update Learning Path Item",
    "name": "UpdateLearningPathItem",
    "group": "Learning_Path_Items",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the Learning Path Item you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>The link of the Learning Path Item you want to create</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Learning-Path-Item-Update-Example:",
          "content": "{ \n  \"changes\":\n  {\n     \"name\": \"apidoc videos\",\n\t    \"description\": \"In this Learning Path Item, you will learn the tedium of writing docs.\",\n\t    \"category\": \"Docs\"\n  }\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the Learning Path Item that the user Updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"path item with id 4 updated\",\n  \"id\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Not-Authorized",
            "description": "<p>Could not add Learning Path item, user not authorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "Find-Path-Error",
            "description": "<p>Could not find Learning Path to update Learning Path Item for</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to update Learning Path Item for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Update-Learning-Path-Item-Error",
            "description": "<p>Could not update Learning Path Item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to update Learning Path Item for\"\n}",
          "type": "json"
        },
        {
          "title": "404-Path-Not-Found:",
          "content": "HTTP/1.1 404 Internal Server Error\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "403-Not-Authorized:",
          "content": "HTTP/1.1 403 Internal Server Error\n{\n \"message\": \"User is not permitted to change this path\"\n}",
          "type": "json"
        },
        {
          "title": "500-Update-Learning-Path-Item-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not update Learning Path Item\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Path_Items"
  },
  {
    "type": "delete",
    "url": "/api/learning-paths/:id",
    "title": "Delete Learning Path",
    "name": "DeleteLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>A message that the learning path was deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"Learning path deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to delete this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to delete learning path for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Delete-learning",
            "description": "<p>path-Error Could not delete learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to change this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to delete learning path for\"\n}",
          "type": "json"
        },
        {
          "title": "500-learning path-Delete-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not delete learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "delete",
    "url": "/api/learning-paths/:id/tags",
    "title": "Delete Tag From Learning Path",
    "name": "DeleteTagFromLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the tag you want to delete from the learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tag Delete Example:",
          "content": "{ \n       tag: 'Learning'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the tag was removed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    message: 'tag removed from learning path'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Tag-Data",
            "description": "<p>The tag data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to remove tag from this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          },
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "tag-not-found-error",
            "description": "<p>The tag with the name sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to remove tag for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Delete-Tag-Error",
            "description": "<p>Could not remove tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Tag Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing tag data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to remove tags from this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Tag not found\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to remove tag for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Tag-Remove-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not remove tag from learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "put",
    "url": "/api/learning-paths/:id",
    "title": "Edit Learning Path",
    "name": "EditLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>A message that the Learning Path was updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"Learning path updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Learning-Path-Data",
            "description": "<p>The Learning Path data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to edit this Learning Path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The Learning Path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to edit Learning Path for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Edit-Learning",
            "description": "<p>Path-Error Could not edit Learning Path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Path-Data-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing Learning Path data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to change this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No Learning Path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to edit Learning Path for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Learning Path-Edit-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not edit Learning Path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "get",
    "url": "/api/learning-paths/:id",
    "title": "Get Learning Path",
    "name": "GetLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Learning",
            "description": "<p>Path An object of the Learning Path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"id\": 1,\n  \"name\": \"Onboarding Learning Path\",\n  \"description\": \"This learning path will get you on the road to success.\",\n  \"category\": \"Learning\",\n  \"tags\": [\n    \"Video\",\n    \"Coursera\",\n    \"Free\"\n  ],\n  \"courses\": [\n    {\n      \"id\": 1,\n      \"name\": \"Learning How to Learn: Powerful mental tools to help you master tough subjects\",\n      \"path_order\": 0\n    }\n  ],\n  \"pathItems\": [\n    {\n      \"id\": 1,\n      \"name\": \"seed path item\",\n      \"path_id\": 1,\n      \"description\": \"temporary seed path item, until we have a better placeholder\",\n      \"link\": null,\n      \"type\": \"video\",\n      \"path_order\": 7\n    }\n  ],\n  \"creatorId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The Learning Path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No Learning Path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "get",
    "url": "/api/learning-paths",
    "title": "Get Learning Paths",
    "name": "GetLearningPaths",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>An tag to filter the Learning Paths you want to find (optional)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get Learning Paths By Tag",
          "content": "{\n\t\"tag\": \"Something else\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Learning",
            "description": "<p>Paths An array of the Learning Paths on the website, optionally filtered by url sent in body</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Onboarding Learning Path\",\n    \"description\": \"This learning path will get you on the road to success.\",\n    \"category\": \"Learning\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve learning paths</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "get",
    "url": "/api/learning-paths/yours",
    "title": "Get Your Learning Paths",
    "name": "GetYourLearningPaths",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Learning-Paths",
            "description": "<p>An array of the Learning Paths on the website</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Onboarding Learning Path\",\n    \"description\": \"This learning path will get you on the road to success.\",\n    \"category\": \"Learning\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve learning paths</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "get",
    "url": "/api/learning-paths/yours-owned",
    "title": "Get Your Owned Learning Paths",
    "name": "GetYourOwnedLearningPaths",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Learning-Paths",
            "description": "<p>An array of the Learning Paths on the website that the user created/owns</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 2,\n    \"name\": \"Python Basics\",\n    \"description\": \"Learn the basics of Python scripting language.\",\n    \"category\": \"Python\",\n    \"creator_id\": 2,\n    \"font_awesome_name\": null,\n    \"courseIds\": [],\n    \"contentLength\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve learning paths</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Error connecting with server\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "post",
    "url": "/api/learning-paths/:id/users",
    "title": "Join Learning Path",
    "name": "JoinLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to join to learning path</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Join-Learning-Path-Error",
            "description": "<p>Could not join learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to join to learning path\"\n}",
          "type": "json"
        },
        {
          "title": "500-Join-Learning-Path-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not join learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "post",
    "url": "/api/learning-paths/:id/courses/:courseId",
    "title": "Post Course To Learning Path",
    "name": "PostCourseToLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>The order of the course to be added to the learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Course Post Example:",
          "content": "{ \n   \"order\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the course was added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    message: 'Course added to learning path'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to add course to this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "course-not-found-error",
            "description": "<p>The course with the id sent was not found in database</p>"
          },
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add course for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Course-Error",
            "description": "<p>Could not add course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to add course to this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Course not found\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add course for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Add-Course-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not add course to learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "post",
    "url": "/api/learning-paths",
    "title": "Post Learning Path",
    "name": "PostLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Learning Path you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Learning Path you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of the Learning Path you want to create</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Learning Path-Post-Example:",
          "content": "{ \n\t \"name\": \"Learn How to Write Docs\",\n\t \"description\": \"In this Learning Path, you will learn the tedium of writing docs.\",\n\t \"category\": \"Learning\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the Learning Path that the user posted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    \"id\": 2\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Learning-Path-Data",
            "description": "<p>The Learning Path data is absent</p>"
          },
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Learning-Path-Name",
            "description": "<p>The Learning Path name is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add Learning Path for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Learning-Path-Error",
            "description": "<p>Could not add Learning Path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Learning Path-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing Learning Path data\"\n}",
          "type": "json"
        },
        {
          "title": "400-Name-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Learning Path name is required\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add Learning Path for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Learning-Path-Add-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not add Learning Path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "post",
    "url": "/api/learning-paths/:id/tags",
    "title": "Post Tag To Learning Path",
    "name": "PostTagToLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the tag you want to create/add for the learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Tag Post Example:",
          "content": "{ \n  tag: 'Learning'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the tag was added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n    message: 'tag added to learning path'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Tag-Data",
            "description": "<p>The tag data is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to add tag to this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to add tag for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Add-Tag-Error",
            "description": "<p>Could not add tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Tag Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Missing tag data\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to add tag to this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to add tag for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Tag-Add-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not add tag to learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "put",
    "url": "/api/learning-paths",
    "title": "Put Learning Paths Order For User",
    "name": "PutLearningPathsOrderForUser",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pathOrderArray",
            "description": "<p>An array of the path orders for the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get Learning Paths By Tag",
          "content": "{\n\t\"pathOrderArray\": \n\t[\n\t\t{\n\t\t\t\"pathId\": 1,\n\t\t\t\"userPathOrder\": 1\n\t\t},\n\t\t{\n\t\t\t\"pathId\": 2,\n\t\t\t\"userPathOrder\": 0\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message confirming that the user's path orders were updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"message\": \"User's path order updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The user must send a pathOrderArray</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Couldn",
            "description": "<p>'t-Find-User Could not find the user to update for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Update-Error",
            "description": "<p>Could not update the learning path order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"must send pathOrderArray\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Couldn't-Find-User:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to update learning path order for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Update-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: Could not update learning path order\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "delete",
    "url": "/api/learning-paths/:id/users",
    "title": "Quit Learning Path",
    "name": "QuitLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>An id of the Learning Path that the user quit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"Quit learning path\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to quit to learning path</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "quit-Learning-Path-Error",
            "description": "<p>Could not quit learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to quit to learning path\"\n}",
          "type": "json"
        },
        {
          "title": "500-quit-Learning-Path-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not quit learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "delete",
    "url": "/api/learning-paths/:id/courses/courseId",
    "title": "Remove Course From Learning Path",
    "name": "RemoveCourseFromLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the course was removed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    message: 'Course removed from learning path'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "Bad-Request-Error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to remove course from this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          },
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "course-not-found-error",
            "description": "<p>The course with the id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to remove course for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Remove-Course-Error",
            "description": "<p>Could not remove course</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to remove courses from this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Course not found\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to remove course for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Remove-Course-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not remove course from learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "put",
    "url": "/api/learning-paths/:id/yours",
    "title": "Toggle Learning Path Completion",
    "name": "ToggleLearningPathCompletion",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>A message that the Learning Path was toggled</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"message\": \"Learning path completion toggled\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to toggle learning path completion for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Toggle-Learning-Path-Completion-Error",
            "description": "<p>Could not toggle learning path completion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to toggle learning path completion for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Learning Path-Edit-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not toggle learning path completion\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "put",
    "url": "/api/learning-paths/:id/order",
    "title": "Update Content Order In Learning Path",
    "name": "UpdateContentOrderInLearningPath",
    "group": "Learning_Paths",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Content",
            "description": "<p>The content to be updated in the learning path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content Put Example:",
          "content": "{ \n   content: \n   [\n         {\n             \"name\": \"Some Course\",\n             \"id\": 1,\n             \"order\": 4\n         },\n         {\n             \"name\": \"Some Path Item\",\n             \"path_id\": 1,\n             \"id\": 3,\n             \"order\": 2\n         }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Message",
            "description": "<p>A message that the content was updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    message: 'Content order updated in learning path'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "type": "Object",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The user is not authorized to update content order in this learning path</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "content-not-found-error",
            "description": "<p>The content with the id sent was not found in database</p>"
          },
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>The learning path with id sent was not found in database</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to update content order for</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Update-Content-Order-Error",
            "description": "<p>Could not update content order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "403-Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n \"message\": \"User is not permitted to update content order in this learning path\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Content not found\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"No learning path found with that ID\"\n}",
          "type": "json"
        },
        {
          "title": "500-User-Not-Found:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Could not find user to update content order for\"\n}",
          "type": "json"
        },
        {
          "title": "500-Update-Content-Order-Error:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n \"message\": \"Internal error: could not update content order in learning path\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./learning-paths/learningPathRouterDocs.js",
    "groupTitle": "Learning_Paths"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id/sections/:section_id",
    "title": "Delete Course Section",
    "name": "DeleteCourseSection",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"message\": \"Section has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a section with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find section to get course for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Section not found with id of 4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "get",
    "url": "/api/courses/:id/sections",
    "title": "Get Course Sections",
    "name": "GetCourseSections",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Sections",
            "description": "<p>an array of the course sections</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"sections\": [\n        {\n            \"id\": 1,\n            \"name\": \"What is Learning number 24?\",\n            \"course_id\": 1,\n            \"description\": \"Although living brains are very complex, this module uses metaphor and analogy to help simplify matters. You will discover several fundamentally different modes of thinking, and how you can use these modes to improve your learning. You will also be introduced to a tool for tackling procrastination, be given some practical information about memory, and discover surprisingly useful insights about learning and sleep. <br><br>(Please note that this module should only take about an hour--the extra time quoted relates to purely optional activities.)\",\n            \"link\": \"https://www.coursera.org/learn/learning-how-to-learn/home/week/2\",\n            \"order\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a course with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find user to get sections for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"could not find a course with an id of 4\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Could not find user to get section for\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "get",
    "url": "/api/courses/:id/yoursections",
    "title": "Get Your Course Sections",
    "name": "GetYourCourseSections",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Sections",
            "description": "<p>an array of the course sections for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"sections\": [\n    {\n      \"id\": 5,\n      \"name\": \"Change IS possible\",\n      \"course_id\": 2,\n      \"description\": \"In today's world, change is the only constant. This means that whatever stage you are in life, you need to keep yourself open and able to change. How can you do this? In three ways: Learn more about your hidden capabilities and assets. Learn more about learning effectively. Learn about matching your assets with the opportunities that face you. In this week, we'll dive into these three important areas!\",\n      \"link\": \"https://www.coursera.org/learn/mindshift/home/week/1\",\n      \"order\": 1,\n      \"manually_completed\": 0,\n      \"automatically_completed\": 0\n    },\n    {\n      \"id\": 6,\n      \"name\": \"Getting deeper into happy learning\",\n      \"course_id\": 2,\n      \"description\": \"Key to your ability to mindshift is being able to learn effectively. This week, we???ll dive deeper into this vital area. Getting yourself motivated to tackle procrastination can sometimes be a challenge in learning, so we???ll give you some important tips here. But we???ll also give insights into mental tricks to help you focus, relax, and reframe if stress intrudes. We???ll also show you how to avoid common learning pitfalls. Welcome and enjoy!\",\n      \"link\": \"https://www.coursera.org/learn/mindshift/home/week/2\",\n      \"order\": 2,\n      \"manually_completed\": 0,\n      \"automatically_completed\": 0\n    },\n    {\n      \"id\": 7,\n      \"name\": \"Learning and careers\",\n      \"course_id\": 2,\n      \"description\": \"This week, we???ll be talking about how your own career can develop and change through your life. Your own internal feelings about what you want to do can play a critical role in your long-term happiness. But society and culture can also have a dramatic effect on your career choices and decisions???as can your parents, family, and friends. We???ll talk about second-skilling yourself, and developing a talent stack of average talents that can combine into a formidable asset. We???ll also talk about various tactics and techniques to help you survive career changes and upheavals. Welcome and enjoy!\",\n      \"link\": \"https://www.coursera.org/learn/mindshift/home/week/3\",\n      \"order\": 3,\n      \"manually_completed\": 0,\n      \"automatically_completed\": 0\n    },\n    {\n      \"id\": 8,\n      \"name\": \"Adopting a learning lifestyle\",\n      \"course_id\": 2,\n      \"description\": \"In this final week of the course, we'll be exploring how and why to keep yourself in 'mindshift' mode. We'll give you all sorts of insider tips on how to pick out the best online learning with materials that are right for you. And we'll also talk about other ways of learning???ways that can make you 'the smartest person in the room. Disruption lies ahead in the world???this week, we'll help you seize the advantage. Off we go for our final week of Mindshift!\",\n      \"link\": \"https://www.coursera.org/learn/mindshift/home/week/4\",\n      \"order\": 4,\n      \"manually_completed\": 0,\n      \"automatically_completed\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a course with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find user to get sections for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"could not find a course with an id of 4\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"message\": \"Could not find user to get section for\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "post",
    "url": "/api/courses/:id/sections",
    "title": "Post Course Section",
    "name": "PostCourseSection",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "Created",
            "description": "<p>message with id returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"message\": \"Section has been added\",\n    \"id\": 7\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find section to get course for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "put",
    "url": "/api/courses/:id/sections/:section_id",
    "title": "Put Course Section",
    "name": "PutCourseSection",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n    \"message\": \"Section has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "Missing-Section-Changes",
            "description": "<p>The section changes are absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Object",
            "optional": false,
            "field": "not-found-error",
            "description": "<p>could not find a section with the passed in id</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-Section-Error",
            "description": "<p>Could not find section to get course for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Section-Changes-Missing:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"message\": \"Could not find changes in body\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"message\": \"Section not found with id of 4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "put",
    "url": "/api/courses/:id/sections/:section_id/togglecomplete",
    "title": "Toggle Section Completion",
    "name": "ToggleSectionCompletion",
    "group": "Sections",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "Updated",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Updated\n{\n    \"message\": \"Section completion toggled\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Find-User-Error",
            "description": "<p>Could not find user to update section for HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Could not find user to update section for&quot; }</p>"
          },
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Toggle-Section-Error",
            "description": "<p>Internal Error: Could not toggle section completion HTTP/1.1 500 Internal-Error { &quot;message&quot;: &quot;Internal Error: Could not toggle section completion&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses/coursesRouterDocs.js",
    "groupTitle": "Sections"
  },
  {
    "type": "get",
    "url": "/api/tags",
    "title": "Get Tags",
    "name": "GetTags",
    "group": "Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>the type of content being sent</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User's token for authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Tags",
            "description": "<p>An array of the tags on the website</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Video\"\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Coursera\"\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Free\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Could not retrieve tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Forbidden Access!\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n \"message\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Error: Could not get tags\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tags/tagsRouter.js",
    "groupTitle": "Tags"
  }
] });
