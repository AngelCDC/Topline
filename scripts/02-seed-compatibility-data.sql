-- Insertar vehículos (marcas principales)
INSERT INTO vehicles (brand, model, year_start, year_end, engine_type) VALUES
('Toyota', 'Corolla', 2015, 2024, 'Gasolina'),
('Toyota', 'Camry', 2015, 2024, 'Gasolina'),
('Toyota', 'RAV4', 2015, 2024, 'Gasolina'),
('Honda', 'Civic', 2014, 2024, 'Gasolina'),
('Honda', 'Accord', 2013, 2024, 'Gasolina'),
('Honda', 'CR-V', 2015, 2024, 'Gasolina'),
('Ford', 'Mustang', 2015, 2024, 'Gasolina'),
('Ford', 'F-150', 2015, 2024, 'Gasolina'),
('Ford', 'Escape', 2015, 2024, 'Gasolina'),
('BMW', '320i', 2012, 2024, 'Gasolina'),
('BMW', 'X3', 2015, 2024, 'Gasolina'),
('Mercedes-Benz', 'C-Class', 2014, 2024, 'Gasolina'),
('Mercedes-Benz', 'GLC', 2016, 2024, 'Gasolina'),
('Tesla', 'Model 3', 2017, 2024, 'Eléctrico'),
('Tesla', 'Model Y', 2020, 2024, 'Eléctrico'),
('Chevrolet', 'Malibu', 2016, 2024, 'Gasolina'),
('Nissan', 'Altima', 2013, 2024, 'Gasolina'),
('Hyundai', 'Elantra', 2011, 2024, 'Gasolina'),
('Volkswagen', 'Jetta', 2015, 2024, 'Gasolina'),
('Mazda', 'CX-5', 2013, 2024, 'Gasolina')
ON CONFLICT (brand, model, year_start, year_end) DO NOTHING;

-- Insertar accesorios
INSERT INTO accessories (name, description, price, stock, category, sku, image_url) VALUES
('ProShield Tapetes Premium', 'Tapetes de piso precisamente ajustados con protección multiusos', 129.99, 150, 'Tapetes', 'PSM-001', '/images/product-floormat.jpg'),
('Forro de Carga Armor', 'Protección resistente para maletero y área de carga', 89.99, 100, 'Accesorios', 'CA-002', '/images/product-cargo.jpg'),
('Cubierta Volante GripTech', 'Agarre premium con tejido de fibra de carbono', 49.99, 200, 'Accesorios', 'GV-003', '/images/product-steering.jpg'),
('Protector Asientos Deluxe', 'Funda de asiento resistente al agua y duradera', 79.99, 120, 'Protectores', 'PAS-004', '/images/product-seat.jpg'),
('Bandeja de Puerta Premium', 'Organizador de puerta con múltiples compartimentos', 39.99, 180, 'Organizadores', 'BP-005', '/images/product-door-tray.jpg'),
('Alfombrilla Maletero Antideslizante', 'Superficie antideslizante para máxima seguridad', 34.99, 160, 'Tapetes', 'AMA-006', '/images/product-trunk-mat.jpg'),
('Juego Tapetes Deluxe 4piezas', 'Set completo de 4 tapetes para automóvil', 159.99, 80, 'Tapetes', 'JTD-007', '/images/product-mat-set.jpg'),
('Protector Volante Cuero Premium', 'Cubierta de cuero genuino para volante', 59.99, 140, 'Accesorios', 'PVC-008', '/images/product-leather-wheel.jpg'),
('Organizador Centrera', 'Divisor ajustable para la consola central', 29.99, 200, 'Organizadores', 'OC-009', '/images/product-console-organizer.jpg'),
('Filtro Aire Rendimiento Premium', 'Filtro de aire de alto rendimiento lavable', 44.99, 170, 'Rendimiento', 'FAR-010', '/images/product-air-filter.jpg'),
('Tapete Maletero Con Bandeja', 'Fondo de maletero con bandeja de retención', 99.99, 110, 'Tapetes', 'TMB-011', '/images/product-trunk-tray.jpg'),
('Kit Protección Bordes Puertas', 'Protectores de borde para puertas del automóvil', 24.99, 250, 'Protectores', 'KPB-012', '/images/product-door-edge.jpg'),
('Soporte Teléfono Magnético', 'Soporte con imanes para teléfono móvil', 19.99, 300, 'Accesorios', 'STM-013', '/images/product-phone-mount.jpg'),
('Luz Interior LED Premium', 'Iluminación LED interior con control de intensidad', 34.99, 190, 'Iluminación', 'LIP-014', '/images/product-led-light.jpg'),
('Protector Umbral Puerta Brillante', 'Protección transparente para umbral de puerta', 29.99, 220, 'Protectores', 'PUP-015', '/images/product-threshold-protector.jpg')
ON CONFLICT (sku) DO NOTHING;

-- Insertar compatibilidades (Accesorios aplicables a cada vehículo)
-- Tapetes compatibles con Toyota Corolla
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'Toyota' AND v.model = 'Corolla' AND a.sku IN ('PSM-001', 'AMA-006', 'JTD-007', 'TMB-011', 'KPB-012', 'STM-013')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;

-- Accesorios para Toyota Camry
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'Toyota' AND v.model = 'Camry' AND a.sku IN ('PSM-001', 'CA-002', 'GV-003', 'PAS-004', 'BP-005', 'AMA-006', 'JTD-007', 'PVC-008')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;

-- Accesorios para Honda Civic
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'Honda' AND v.model = 'Civic' AND a.sku IN ('PSM-001', 'GV-003', 'PAS-004', 'AMA-006', 'JTD-007', 'OC-009', 'LIP-014')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;

-- Accesorios para Ford F-150
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'Ford' AND v.model = 'F-150' AND a.sku IN ('PSM-001', 'CA-002', 'GV-003', 'PAS-004', 'TMB-011', 'FAR-010')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;

-- Accesorios para BMW 320i
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'BMW' AND v.model = '320i' AND a.sku IN ('PSM-001', 'PVC-008', 'OC-009', 'FAR-010', 'LIP-014', 'PUP-015')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;

-- Accesorios para Tesla Model 3
INSERT INTO compatibility (vehicle_id, accessory_id)
SELECT v.id, a.id FROM vehicles v, accessories a 
WHERE v.brand = 'Tesla' AND v.model = 'Model 3' AND a.sku IN ('PSM-001', 'PAS-004', 'BP-005', 'OC-009', 'LIP-014', 'STM-013')
ON CONFLICT (vehicle_id, accessory_id) DO NOTHING;
