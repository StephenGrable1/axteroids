function createShip(position, rotation) {
    var x = 200;
    var y = 200;
    var radius = 20;
    var angle = rotation - 30;

    var circle = new Path.Circle(new Point(x, y), radius);
    var triangle = new Path.RegularPolygon(new Point(x, y), 3, radius);
    var triangle2 = new Path.RegularPolygon(new Point(x, y), 3, radius / 2);

    triangle.insert(1, new Point(x, y));
    triangle2.insert(1, new Point(x, y));

    var ship = new CompoundPath({
        children: [
            triangle, triangle2, circle
        ],
        // selected: true
    })
}

ship.strokeColor = 'cyan';
ship.strokeWidth = 2;
ship.rotate(angle);
