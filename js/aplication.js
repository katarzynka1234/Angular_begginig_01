'use strict'

var browser = angular.module('myApp', []);


browser.controller('kontrolerTabeliSkoczkow', ['$scope', '$filter', function ($scope, $filter) {
    
    $scope.dodajSkoczka = function() {
        $scope.skoczkowie.splice( 0 , 0, { 
            Name: $scope.nazwiskoSkoczka, 
            Nation: $scope.narodowoscSkoczka, 
            rank: $scope.miejsceSkoczka, 
            pts: $scope.punktySkoczka 
        })
    };
    
    $scope.edycja = false;

    $scope.usunSkoczka = function($index) {
        $scope.skoczkowie.splice($index, 1);
    };

    $scope.skoczkowie = [
        {
            "Name": "FREUND Severin",
            "Nation": "GER",
            "rank": 1,
            "pts": 1729
        },
        {
            "Name": "PREVC Peter",
            "Nation": "SLO",
            "rank": 1,
            "pts": 1729
        },
        {
            "Name": "KRAFT Stefan",
            "Nation": "AUT",
            "rank": 3,
            "pts": 1578
        },
        {
            "Name": "FANNEMEL Anders",
            "Nation": "NOR",
            "rank": 4,
            "pts": 1161
        },
        {
            "Name": "HAYBOECK Michael",
            "Nation": "AUT",
            "rank": 5,
            "pts": 1157
        },
        {
            "Name": "KASAI Noriaki",
            "Nation": "JPN",
            "rank": 6,
            "pts": 1137
        },
        {
            "Name": "KOUDELKA Roman",
            "Nation": "CZE",
            "rank": 7,
            "pts": 1113
        },
        {
            "Name": "VELTA Rune",
            "Nation": "NOR",
            "rank": 8,
            "pts": 848
        },
        {
            "Name": "STOCH Kamil",
            "Nation": "POL",
            "rank": 9,
            "pts": 820
        },
        {
            "Name": "SCHLIERENZAUER Gregor",
            "Nation": "AUT",
            "rank": 10,
            "pts": 739
        },
        {
            "Name": "AMMANN Simon",
            "Nation": "SUI",
            "rank": 11,
            "pts": 646
        },
        {
            "Name": "FREITAG Richard",
            "Nation": "GER",
            "rank": 12,
            "pts": 622
        },
        {
            "Name": "TEPES Jurij",
            "Nation": "SLO",
            "rank": 13,
            "pts": 554
        },
        {
            "Name": "DAMJAN Jernej",
            "Nation": "SLO",
            "rank": 14,
            "pts": 535
        },
        {
            "Name": "EISENBICHLER Markus",
            "Nation": "GER",
            "rank": 15,
            "pts": 529
        },
        {
            "Name": "ITO Daiki",
            "Nation": "JPN",
            "rank": 16,
            "pts": 513
        },
        {
            "Name": "JACOBSEN Anders",
            "Nation": "NOR",
            "rank": 17,
            "pts": 511
        },
        {
            "Name": "BARDAL Anders",
            "Nation": "NOR",
            "rank": 18,
            "pts": 477
        },
        {
            "Name": "ZYLA Piotr",
            "Nation": "POL",
            "rank": 19,
            "pts": 474
        },
        {
            "Name": "TAKEUCHI Taku",
            "Nation": "JPN",
            "rank": 20,
            "pts": 363
        },
        {
            "Name": "NEUMAYER Michael",
            "Nation": "GER",
            "rank": 21,
            "pts": 347
        },
        {
            "Name": "KRAUS Marinus",
            "Nation": "GER",
            "rank": 22,
            "pts": 327
        },
        {
            "Name": "FORFANG Johann Andre",
            "Nation": "NOR",
            "rank": 23,
            "pts": 325
        },
        {
            "Name": "DEZMAN Nejc",
            "Nation": "SLO",
            "rank": 24,
            "pts": 224
        },
        {
            "Name": "PUNGERTAR Matjaz",
            "Nation": "SLO",
            "rank": 25,
            "pts": 205
        },
        {
            "Name": "KRANJEC Robert",
            "Nation": "SLO",
            "rank": 26,
            "pts": 201
        },
        {
            "Name": "DESCHWANDEN Gregor",
            "Nation": "SUI",
            "rank": 27,
            "pts": 189
        },
        {
            "Name": "DESCOMBES SEVOIE Vincent",
            "Nation": "FRA",
            "rank": 28,
            "pts": 179
        },
        {
            "Name": "KOFLER Andreas",
            "Nation": "AUT",
            "rank": 29,
            "pts": 173
        },
        {
            "Name": "ASIKAINEN Lauri",
            "Nation": "FIN",
            "rank": 30,
            "pts": 157
        },
        {
            "Name": "SJOEEN Phillip",
            "Nation": "NOR",
            "rank": 31,
            "pts": 155
        },
        {
            "Name": "MAEAETTAE Jarkko",
            "Nation": "FIN",
            "rank": 32,
            "pts": 151
        },
        {
            "Name": "FETTNER Manuel",
            "Nation": "AUT",
            "rank": 33,
            "pts": 146
        },
        {
            "Name": "VASSILIEV Dimitry",
            "Nation": "RUS",
            "rank": 34,
            "pts": 145
        },
        {
            "Name": "WELLINGER Andreas",
            "Nation": "GER",
            "rank": 35,
            "pts": 137
        },
        {
            "Name": "STJERNEN Andreas",
            "Nation": "NOR",
            "rank": 36,
            "pts": 134
        },
        {
            "Name": "POPPINGER Manuel",
            "Nation": "AUT",
            "rank": 37,
            "pts": 128
        },
        {
            "Name": "LEYHE Stephan",
            "Nation": "GER",
            "rank": 38,
            "pts": 120
        },
        {
            "Name": "HILDE Tom",
            "Nation": "NOR",
            "rank": 39,
            "pts": 118
        },
        {
            "Name": "MATURA Jan",
            "Nation": "CZE",
            "rank": 40,
            "pts": 114
        },
        {
            "Name": "GANGNES Kenneth",
            "Nation": "NOR",
            "rank": 41,
            "pts": 113
        },
        {
            "Name": "MURANKA Klemens",
            "Nation": "POL",
            "rank": 42,
            "pts": 102
        },
        {
            "Name": "DIETHART Thomas",
            "Nation": "AUT",
            "rank": 43,
            "pts": 99
        },
        {
            "Name": "KOBAYASHI Junshiro",
            "Nation": "JPN",
            "rank": 44,
            "pts": 95
        },
        {
            "Name": "TANDE Daniel Andre",
            "Nation": "NOR",
            "rank": 45,
            "pts": 81
        },
        {
            "Name": "TOCHIMOTO Shohei",
            "Nation": "JPN",
            "rank": 46,
            "pts": 79
        },
        {
            "Name": "BOYARINTSEV Vladislav",
            "Nation": "RUS",
            "rank": 47,
            "pts": 77
        },
        {
            "Name": "ZNISZCZOL Aleksander",
            "Nation": "POL",
            "rank": 48,
            "pts": 75
        },
        {
            "Name": "SAKUYAMA Kento",
            "Nation": "JPN",
            "rank": 49,
            "pts": 62
        },
        {
            "Name": "ZIOBRO Jan",
            "Nation": "POL",
            "rank": 50,
            "pts": 55
        },
        {
            "Name": "WANK Andreas",
            "Nation": "GER",
            "rank": 51,
            "pts": 54
        },
        {
            "Name": "BRESADOLA Davide",
            "Nation": "ITA",
            "rank": 52,
            "pts": 48
        },
        {
            "Name": "KUBACKI Dawid",
            "Nation": "POL",
            "rank": 53,
            "pts": 35
        },
        {
            "Name": "LARINTO Ville",
            "Nation": "FIN",
            "rank": 53,
            "pts": 35
        },
        {
            "Name": "SEMENIC Anze",
            "Nation": "SLO",
            "rank": 53,
            "pts": 35
        },
        {
            "Name": "JANDA Jakub",
            "Nation": "CZE",
            "rank": 56,
            "pts": 34
        },
        {
            "Name": "HAZETDINOV Ilmir",
            "Nation": "RUS",
            "rank": 57,
            "pts": 32
        },
        {
            "Name": "AHONEN Janne",
            "Nation": "FIN",
            "rank": 58,
            "pts": 29
        },
        {
            "Name": "PREVC Cene",
            "Nation": "SLO",
            "rank": 59,
            "pts": 27
        },
        {
            "Name": "MAKSIMOCHKIN Mikhail",
            "Nation": "RUS",
            "rank": 60,
            "pts": 26
        },
        {
            "Name": "HAJEK Antonin",
            "Nation": "CZE",
            "rank": 61,
            "pts": 24
        },
        {
            "Name": "LANISEK Anze",
            "Nation": "SLO",
            "rank": 62,
            "pts": 23
        },
        {
            "Name": "NIEMI Sami",
            "Nation": "FIN",
            "rank": 63,
            "pts": 19
        },
        {
            "Name": "KOIVURANTA Anssi",
            "Nation": "FIN",
            "rank": 64,
            "pts": 18
        },
        {
            "Name": "KOT Maciej",
            "Nation": "POL",
            "rank": 65,
            "pts": 17
        },
        {
            "Name": "PEIER Killian",
            "Nation": "SUI",
            "rank": 66,
            "pts": 15
        },
        {
            "Name": "HAUER Joachim",
            "Nation": "NOR",
            "rank": 67,
            "pts": 14
        },
        {
            "Name": "WOHLGENANNT Ulrich",
            "Nation": "AUT",
            "rank": 67,
            "pts": 14
        },
        {
            "Name": "LAMY CHAPPUIS Ronan",
            "Nation": "FRA",
            "rank": 69,
            "pts": 13
        },
        {
            "Name": "WENIG Daniel",
            "Nation": "GER",
            "rank": 70,
            "pts": 11
        },
        {
            "Name": "ZOGRAFSKI Vladimir",
            "Nation": "BUL",
            "rank": 70,
            "pts": 11
        },
        {
            "Name": "LOITZL Wolfgang",
            "Nation": "AUT",
            "rank": 72,
            "pts": 8
        },
        {
            "Name": "KORNILOV Denis",
            "Nation": "RUS",
            "rank": 73,
            "pts": 6
        },
        {
            "Name": "NAGLIC Tomaz",
            "Nation": "SLO",
            "rank": 73,
            "pts": 6
        },
        {
            "Name": "GEIGER Karl",
            "Nation": "GER",
            "rank": 75,
            "pts": 5
        },
        {
            "Name": "JOHANSSON Robert",
            "Nation": "NOR",
            "rank": 75,
            "pts": 5
        },
        {
            "Name": "JUSTIN Rok",
            "Nation": "SLO",
            "rank": 75,
            "pts": 5
        },
        {
            "Name": "ALEXANDER Nicholas",
            "Nation": "USA",
            "rank": 78,
            "pts": 4
        },
        {
            "Name": "HLAVA Lukas",
            "Nation": "CZE",
            "rank": 78,
            "pts": 4
        },
        {
            "Name": "HULA Stefan",
            "Nation": "POL",
            "rank": 78,
            "pts": 4
        },
        {
            "Name": "INGVALDSEN Ole Marius",
            "Nation": "NOR",
            "rank": 78,
            "pts": 4
        },
        {
            "Name": "CHOI Seou",
            "Nation": "KOR",
            "rank": 82,
            "pts": 2
        },
        {
            "Name": "ITO Kenshiro",
            "Nation": "JPN",
            "rank": 82,
            "pts": 2
        },
        {
            "Name": "PASCHKE Pius",
            "Nation": "GER",
            "rank": 82,
            "pts": 2
        },
        {
            "Name": "GREIDERER Simon",
            "Nation": "AUT",
            "rank": 85,
            "pts": 1
        },
        {
            "Name": "OLLI Harri",
            "Nation": "FIN",
            "rank": 85,
            "pts": 1
        },
        {
            "Name": "ROMASHOV Alexey",
            "Nation": "RUS",
            "rank": 85,
            "pts": 1
        },
        {
            "Name": "AIGNER Clemens",
            "Nation": "AUT",
            "rank": null,
            "pts": null
        },
        {
            "Name": "FAIRALL Nicholas",
            "Nation": "USA",
            "rank": null,
            "pts": null
        },
        {
            "Name": "FUCHS Tim",
            "Nation": "GER",
            "rank": null,
            "pts": null
        },
        {
            "Name": "KLUSEK Bartlomiej",
            "Nation": "POL",
            "rank": null,
            "pts": null
        },
        {
            "Name": "ROWLEY Matthew",
            "Nation": "CAN",
            "rank": null,
            "pts": null
        },
        {
            "Name": "SHIMIZU Reruhi",
            "Nation": "JPN",
            "rank": null,
            "pts": null
        },
        {
            "Name": "TOLLINGER Elias",
            "Nation": "AUT",
            "rank": null,
            "pts": null
        }
    ];
}]);
