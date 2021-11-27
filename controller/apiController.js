const controller = {};

controller.getProducts = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        
        connection.query('select * from products', (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
};

controller.addProducts = (req, res) => {
    // body params  query
    console.log(req.body);
    var data = {
        id: null,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    // console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);

        connection.query('insert into products set ? , createDate = CURRENT_TIMESTAMP, updateFrom = NULL', data, (err2, result) => {
            if (err2) res.json(err2);

            res.send('Thêm sản phẩm thành công');
        });
    }); // end getConnection
};

controller.updateProducts = (req, res) => {
    // body params  query
    // console.log(req.body);
    var id = req.body.id;
    var data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);

        connection.query('update products set ? ,`updateFrom`= CURRENT_TIMESTAMP where id = ?', [data, id], (err2, result) => {
            if (err2) res.json(err2);

            res.send('Cập Nhật sản phẩm thành công');
        });
    }); // end getConnection
};

controller.deleteProducts = (req, res) => {
    // body params  query
    console.log(req.body);
    var id = req.body.id;

    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);

        connection.query('DELETE FROM `products` WHERE id = ?', [id], (err2, result) => {
            if (err2) res.json(err2);
            
            res.send('Xóa sản phẩm thành công');
        });
    }); // end getConnection
};

module.exports = controller;