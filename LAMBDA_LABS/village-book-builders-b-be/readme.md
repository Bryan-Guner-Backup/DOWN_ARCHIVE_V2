# API Basics

> Please note due to json-server, ALL HTTP verbs are supported at this time. Refer to https://www.notion.so/VBB-Designing-API-Contract-Endpoints-eca9722b1fdb4552915f9f0999ba802a for API specifications/contracts
---
##Base URL
https://vbb-b-api.herokuapp.com

## Routes

auth routes:

https://vbb-b-api.herokuapp.com/login
https://vbb-b-api.herokuapp.com/register


All basic CRUD operations apply


students|mentees -> https://vbb-b-api.herokuapp.com/mentees

teachers -> https://vbb-b-api.herokuapp.com/teachers

mentors -> https://vbb-b-api.herokuapp.com/mentors

headmasters -> https://vbb-b-api.herokuapp.com/headmasters

programs -> https://vbb-b-api.herokuapp.com/programs

resources -> https://vbb-b-api.herokuapp.com/resources

sessions (used to be called matches) -> https://vbb-b-api.herokuapp.com/sessions


User:
```
{
    "email": "teacher@tea.com",
    "password": "$2a$10$r0Msdne1kGtCR1tsCiOH5.44e/dQ0G.AGn3WlKPgIG9OHWY.mPJ2W",
    "id": 19,
    "role": "headmaster",
    "authFields": ["role"]
},
```

Session:
```
{
    "title": "test",
    "start": "2021-03-15T08:00:00-04:00",
    "end": "2021-03-15T09:00:00-04:00",
    "id": "747e4a7e-33c4-4377-8c01-51d351a3eb7f",
    "mentorId": [2],
    "menteeId": [1, 2],
    "topic": "sciences",
    "locationId": 3,
    "villageId": 2,
    "libraryId": 3,
    "computerId": 2
 }
```

Mentor:
```
{
    "id": 0,
    "first_name": "Myra",
    "last_name": "Waters",
    "gender": "Male",
    "email": "Xzavier.Huels@gmail.com",
    "primary_language": "Armenian",
    "dob": "1997-08-02T03:10:49.233Z",
    "mentor_picture": "http://placeimg.com/640/480",
    "academic_description": "Practical Sleek Illinois benchmark Fish blue Strategist 24/7 mobile Gloves innovative Freeway bandwidth-monitored Applications users synthesizing Mouse Officer navigate Switzerland Account Home Fundamental redundant Implementation Belgium copy Chicken Cheese Focused",
    "support_needed": "SAS Marketing Coordinator regional Consultant Progressive Louisiana seamless Savings Frozen Tactics Computers Gloves Home Plastic Pizza silver RSS Small Customer",
    "availability": {
        "time_zone": "Asia/Tashkent",
        "as_early_as": "4:00",
        "as_late_as": "0:00",
        "methods": ["phone", "duo", "twitter"]
    }
}
```

Mentee:
```
{
    "id": 0,
    "first_name": "Kylee",
    "last_name": "Ortiz",
    "gender": "Female",
    "email": "Meredith_Thompson86@hotmail.com",
    "primary_language": "Fulah",
    "dob": "1990-08-13T04:09:36.241Z",
    "mentee_picture": "http://placeimg.com/640/480",
    "english_lvl": 1,
    "math_lvl": 5,
    "reading_lvl": 3,
    "school_lvl": 5,
    "hasAssignedMentor": true,
    "hasAppointment": false,
    "academic_description": "Hills Mouse Beauty blockchains seize experiences Account state Senior FTP parallelism indexing Nevada Cross-group AGP innovate Tunisian capacitor bleeding-edge Gloves",
    "support_needed": "Bacon Norway Bacon Licensed mobile deliverables Orchestrator Account port Buckinghamshire overriding Ramp e-commerce Gloves Loan Administrator blue programming content Persistent Streets e-commerce Wyoming Garden Supervisor infrastructures XSS distributed info-mediaries Loan neural Markets calculate Rustic copy",
    "availability": {
        "time_zone": "America/Sao_Paulo",
        "as_early_as": "24:00",
        "as_late_as": "15:00",
        "methods": ["phone", "email", "twitter"]
    },
    "dynamic_questions": [
        {
            "qId": 0,
            "question": "My favorite thing to do in my free time is",
            "answer": "You can't reboot the monitor without connecting the back-end FTP interface!"
        },
        ...other questions
    ]
}
```

Village:
```
{
    "id": 0,
    "name": "West Sage",
    "GPS_coordinates": ["35.9739", "125.3078"],
    "village_contact_name": "Al Zboncak",
    "village_contact_phone": "348-817-2295",
    "notes": "Chair Automotive parsing Future Customer virtual Nicaragua Aruba green PNG index Mouse TCP lavender Assimilated protocol Facilitator Wooden alarm Washington Loan revolutionary Wooden envisioneer Handmade Liaison Progressive Soap Dynamic open Locks Loan leverage optimal payment Refined benchmark Cotton Towels Buckinghamshire New bandwidth input matrix Sudan Pitcairn Account granular Niue SQL",
    "headmasterId": [0, 10],
    "schoolId": 0,
    "libraryId": 0
}
```

Library:
```
{
    "id": 0,
    "name": "Krajcik - Hyatt",
    "description": "services Flats hacking Emirates Practical Global info-mediaries white rich Forward deposit plum Programmable holistic synthesizing responsive Taka payment Ergonomic Fundamental Colorado input frictionless Granite iterate Regional COM magenta Avon firmware",
    "library_usage": "application synthesizing RAM parsing Applications Concrete Concrete Wisconsin Handcrafted input Mouse e-business Dynamic Lead backing content Serbia Bangladesh PCI Shoes process Developer Rustic Montana communities Borders executive Zambian Specialist revolutionize",
    "notes": "optical overriding Outdoors payment Ergonomic Tuna Ergonomic CSS North generation firewall whiteboard Borders Lead boliviano transmitting Credit SSL parse withdrawal withdrawal Supervisor e-services Assurance parse parsing payment Open-architected monitoring Senior",
    "image": "http://placeimg.com/600/600",
    "headmasterId": [0, 10],
    "villageId": 0,
    "schoolId": 0
}
```

School:
```
{
    "id": 0,
    "name": "Hammes - Wilderman",
    "count_menteess_currently_enrolled": 31,
    "count_teachers": 0,
    "school_description": "invoice Human open-source Shoal West Electronics Afghani parsing solutions maroon Metal Chief Books Tools Uruguayo Senior compress state driver Kong Visionary Fantastic Representative Ethiopian program firewall Supervisor RAM online parsing",
    "school_needs": "Agent Dynamic Granite GB Regional GB EXE Towels New multi-byte Kids alarm Comoros cultivate neural Regional granular object-oriented Chips Function-based turquoise cultivate Avon deposit District cyan Mouse JBOD Points Chief",
    "school_goals": "Canada Sleek Engineer experiences alarm intermediate Naira blockchains brand empower AI invoice Sausages Functionality Small redefine Cotton Focused Sports lime haptic Checking red PNG HTTP SDD Integration synthesize local benchmark",
    "dynamic_questions": [
        {
            "We need to program the multi-byte TCP driver!": "benchmark Africa Vatu COM Metal modular platforms Loan Way turn-key Legacy Senior methodology Handmade Agent logistical calculating Fully-configurable extensible navigating"
        },
        {
            "Try to navigate the TCP bus, maybe it will copy the mobile bus!": "Group Savings Kids Music Rupee Pizza Congo Response Home IB e-business monitor ivory Account infomediaries Mountain architecture synthesizing reboot parsing"
        },
        {
            "Use the neural IB system, then you can back up the redundant driver!": "port Steel utilisation Account Fully-configurable productivity fuchsia digital Soft Springs feed quantifying 24 Administrator Tools hack Multi-lateral mobile plum Response"
        }
    ],
    "notes": "Fish Automotive Oklahoma Phased violet feed Rubber Incredible SSL Libyan Jewelery Metal Credit Web Automotive Garden People's Handcrafted Investor Technician Handmade Granite Indiana Steel hybrid drive International Officer feed Loan",
    "headmasterId": [0, 10],
    "villageId": 0,
    "libraryId": 0
}
```

Program:
```
{
    "id": 0,
    "name": "East Dustin",
    "location": ["17.5592", "-121.5100"],
    "libraryId": 0
}
```

Headmaster:
```
{
    "id": 0,
    "first_name": "Fermin",
    "last_name": "Mohr",
    "gender": "Female",
    "address": "966 Rebeka Locks",
    "gps_coordinates": ["-48.8483", "84.3483"],
    "images_drive_folder_link": "https://dominique.biz",
    "headmasters_picture": "http://placeimg.com/640/480",
    "education_contact": {
        "name": "Laverne Auer",
        "phone": "1-598-890-1438",
        "email": "Norwood_Hagenes@hotmail.com",
        "jobTitle": "Product Configuration Coordinator"
    },
    "notes": "initiatives Buckinghamshire withdrawal Health Director didactic calculate Global Table SCSI withdrawal payment payment GB Investment Malawi Human Unbranded Concrete Texas state disintermediate intuitive convergence Wooden up Cambridgeshire Shoes microchip Automotive Paraguay Forward Home experiences communities Response Central York white payment Principal Outdoors empowering index Soft Persistent Facilitator Checking View Rubber",
    "villageId": 0,
    "schoolId": 0,
    "libraryId": 0
}
```

Teacher:
```
{
    "id": 0,
    "first_name": "Edwin",
    "last_name": "Vandervort",
    "gender": "Female",
    "address": "41097 Keshawn Terrace",
    "teachers_picture": "http://placeimg.com/640/480",
    "education_contact": {
        "name": "Melvin Wyman",
        "phone": "1-660-559-1774",
        "email": "Anne_Gottlieb@hotmail.com",
        "jobTitle": "District Branding Strategist"
    },
    "notes": "Islands Bacon streamline Specialist Chips system Circle Mauritania deposit cyan Jewelery Tools Rapid pixel integrated Regional national Iowa Ireland users"
}
```