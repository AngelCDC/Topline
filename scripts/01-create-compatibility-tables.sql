-- Tabla de Vehículos
CREATE TABLE IF NOT EXISTS vehicles (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year_start INT NOT NULL,
  year_end INT NOT NULL,
  engine_type VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(brand, model, year_start, year_end)
);

-- Tabla de Accesorios
CREATE TABLE IF NOT EXISTS accessories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  image_url VARCHAR(500),
  category VARCHAR(100) NOT NULL,
  sku VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Puente de Compatibilidad (Muchos a Muchos)
CREATE TABLE IF NOT EXISTS compatibility (
  id SERIAL PRIMARY KEY,
  vehicle_id INT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  accessory_id INT NOT NULL REFERENCES accessories(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(vehicle_id, accessory_id)
);

-- Índices para optimizar búsquedas
CREATE INDEX IF NOT EXISTS idx_vehicles_brand_model ON vehicles(brand, model);
CREATE INDEX IF NOT EXISTS idx_accessories_category ON accessories(category);
CREATE INDEX IF NOT EXISTS idx_compatibility_vehicle ON compatibility(vehicle_id);
CREATE INDEX IF NOT EXISTS idx_compatibility_accessory ON compatibility(accessory_id);
