import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/get/1 (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/api/get/1');
    expect(res.body.id).toBe(1);
    expect(res.body.id).toBeGreaterThan(0);
    expect(res.body.username).not.toBeUndefined();
    expect(res.statusCode).toBe(200);
  });

  it('/api/create (POST)', async () => {
    const username = 'e2e test user';
    const res = await request(app.getHttpServer())
      .post('/api/create')
      .send({ username });
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe(username);
    // TODO: delete this user after test
  });

  it('/api/404 (POST)', async () => {
    const username = 'e2e test user';
    const res = await request(app.getHttpServer())
      .post('/api/404')
      .send({ username });
    expect(res.statusCode).toBe(404);
  });
});
