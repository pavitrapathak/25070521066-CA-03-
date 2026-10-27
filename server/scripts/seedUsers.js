import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '1234567890',
    role: 'user'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    phone: '9876543210',
    role: 'user'
  },
  {
    name: 'Admin User',
    email: 'admin@travelora.com',
    password: 'admin123',
    phone: '5555555555',
    role: 'admin'
  }
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing users
    await User.deleteMany();
    console.log('🗑️ Cleared existing users');

    // Insert new users
    for (const userData of users) {
      const user = await User.create(userData);
      console.log(`✅ Created user: ${user.name} (${user.email})`);
    }

    console.log(`\n🎉 ${users.length} users seeded successfully`);
    console.log('\n📝 Test Credentials:');
    console.log('Regular User:');
    console.log('  Email: john@example.com');
    console.log('  Password: password123');
    console.log('\nAdmin User:');
    console.log('  Email: admin@travelora.com');
    console.log('  Password: admin123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();
