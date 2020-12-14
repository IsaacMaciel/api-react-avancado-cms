module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        "NY9EeDtFVrlB6uVg2/T64OgGqKz4M6Y4yTd7s2BLZtXI+4mJWRUa+nO8ZeGG0CvzSS0itT+BXmeKGh4p5squJg=="
      ),
    },
  },
});
