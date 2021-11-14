const controller = {};

controller.getUsers = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('select * from users', (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
};

controller.getProducts = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('select * from product', (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
};

controller.addProducts = (req, res) => {
    // body params  query
    // console.log(req.body);
    var data = {
        maSP: null,
        tenSP: req.body.tenSP,
        donGia: req.body.donGia,
        soLuong : req.body.soLuong,
        moTa: req.body.moTa
    };
    console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('insert into product set ?', data, (err2, result) => {
            if (err2) res.json(err2);
            res.send({
                status: 'Thêm sản phẩm thành công',
                maSP: null,
                tenSP: req.body.tenSP,
                donGia: req.body.donGia,
                soLuong : req.body.soLuong,
                moTa: req.body.moTa
            });
        });
    }); // end getConnection
};

controller.deleteProduct = (req, res) => {
    // body params  query
    console.log(req.body);
    var maSP = req.body.maSP;

    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('delete from product where maSP = ?', [maSP], (err2, result) => {
            if (err2) res.json(err2);
            res.send({
                status: 'Xóa sản phẩm thành công',
                maSP: maSP
            });
        });
    }); // end getConnection
};

controller.updateProduct = (req, res) => {
    // body params  query
    // console.log(req.body);
    var id = req.body.maSP;
    var data = {
        tenSP: req.body.tenSP,
        donGia: req.body.donGia,
        soLuong : req.body.soLuong,
        moTa: req.body.moTa
    };
    console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('update product set ? where maSP = ?', [data, id], (err2, result) => {
            if (err2) res.json(err2);
            res.send({
                status: 'Cập Nhật sản phẩm thành công',
                maSP: id,
                tenSP: req.body.tenSP,
                donGia: req.body.donGia,
                soLuong : req.body.soLuong,
                moTa: req.body.moTa
            });
        });
    }); // end getConnection
};

controller.getSP = (req, res) => {
    console.log(req.body);
    var maSP = req.body.maSP;

    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('select * from product WHERE maSP = ?', [maSP], (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
}; // end function

controller.dkUSER = (req, res) => {
    console.log(req.body);
    const newUser = {
        id: null,
        tk: req.body.tk,
        mk: req.body.mk
    };

    req.getConnection((err, connection) => {
        if (err) res.send(err);

        connection.query("INSERT INTO users set ? ", newUser, (err2, rows) => {
            if (err2) res.send(err2);

            res.send({
                status: 'Đăng ký Tài Khoản thành công',
                id: null,
                tk: req.body.tk,
                mk: req.body.mk
            });
        });
    });

}; // end function

controller.addCarts = (req, res) => {
    // body params  query
    // console.log(req.body);
    var data = {
        id : null,
        maSP: req.body.maSP,
        tenSP: req.body.tenSP,
        donGia: req.body.donGia,
        soLuong : req.body.soLuong,
        moTa: req.body.moTa
    };
    console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.send(err);

        connection.query('insert into carts set ?', data, (err2, result) => {
            if (err2) res.send(err2);

            res.send({
                status: 'Thêm sản phẩm thành công',
                id : null,
                maSP: req.body.maSP,
                tenSP: req.body.tenSP,
                donGia: req.body.donGia,
                soLuong : req.body.soLuong,
                moTa: req.body.moTa
            });
        });
    }); // end getConnection
}; // end addCarts

controller.getCarts = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        
        connection.query('select * from carts', (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
};

controller.addHD = (req, res) => {
    // body params  query
    // console.log(req.body);
    const d = new Date();
    const ngay = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    var tongTien = Number(req.body.donGia) * Number(req.body.soLuong);

    var data = {
        maHD : null,
        nguoiNhan : req.body.nguoiNhan,
        phone : req.body.phone,
        diaChi : req.body.diaChi,

        maSP: req.body.maSP,
        tenSP: req.body.tenSP,
        donGia: req.body.donGia,
        soLuong : req.body.soLuong,
        moTa: req.body.moTa,

        tongTien : tongTien.toString(),
        ngayMua : ngay,
        trangThai : 'Đang Lấy Hàng'
    };
    console.log(data);
    //
    req.getConnection((err, connection) => {
        if (err) res.send(err);

        connection.query('insert into receipts set ?', data, (err2, result) => {
            if (err2) res.send(err2);

            res.send({
                status: 'Thêm Hóa Đơn thành công',
                maHD : null,
                nguoiNhan : req.body.nguoiNhan,
                phone : req.body.phone,
                diaChi : req.body.diaChi,
        
                maSP: req.body.maSP,
                tenSP: req.body.tenSP,
                donGia: req.body.donGia,
                soLuong : req.body.soLuong,
                moTa: req.body.moTa,
        
                ngayMua : ngay,
                trangThai : 'Đang Lấy Hàng'
            });
        });
    }); // end getConnection
}; // end addHD

controller.getHD = (req, res) => {
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        
        connection.query('select * from receipts', (err2, rows) => {
            if (err2) res.json(err2);

            res.send(rows);
        });
    });
};

controller.deleteCarts = (req, res) => {
    // body params  query
    console.log(req.body);
    var id = req.body.id;

    //
    req.getConnection((err, connection) => {
        if (err) res.json(err);
        connection.query('delete from carts where id = ?', [id], (err2, result) => {
            if (err2) res.json(err2);
            res.send({
                status: 'Xóa sản phẩm thành công',
                id: id
            });
        });
    }); // end getConnection
};

module.exports = controller;