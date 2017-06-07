# Входные-Параметры

Пример массива для входных данных:

var data = 
[

    {   
        from: "Budapest",   
        to: "Sevastopol",   
        transport: {
            type: 'flight',     
            number: '12C',      
            classtype: 'first',     
            seatNumber: '3A',       
            gate: '3'       
        },  
        baggage: {  
            'transferPoint' : 'automatically'       
        }   
    },    
    {...},    
    ...,    
    {...}   

]

from - название места отправления.
to - название места прибытия.



transport.type - тип транспорта (flight, train, bus).

transport.number - номер рейса.

transport.classtype - присутствует только у transport.type == "flight". Указывает в каком классе полетит турист (first, business, economy).

transport.seatNumber - если самолёт, seatNumber указывает на номер места и название ряда (3А). Для поезда и автобуса - только номер места. Может быть пустым.

transport.gate - номер контрольно-пропускного пункта. Только для transport.type == "flight".

transport.traincarnumber - указывает на номер вагона.

transport.railwaytrack - номер железнодорожных путей, на которых будет производиться посадка.


baggage.tranferPoint - перевалочный пункт ('automatically', string, '')
