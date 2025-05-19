# Project Title

Govi Agiar project service documentation

## API Reference

#### Get all items

```http
  GET https://website-z9b7.onrender.com/api/website
  GET https://website-z9b7.onrender.com/api/news
  GET https://website-z9b7.onrender.com/api/messages
  GET https://website-z9b7.onrender.com/api/faq
```

#### Update item

```https
  PUT /api/website

```

##updateWebsite(title,english,mongolia,image_url1,image_url2,image_url3,image_url4)

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Id of item to fetch |
| `english`    | `string` | it is posible null                |
| `mongolia`   | `string` | it is posible null                |
| `image_url1` | `string` | it is posible null                |
| `image_url2` | `string` | it is posible null                |
| `image_url3` | `string` | it is posible null                |
| `image_url4` | `string` | it is posible null                |

## Create news

```https
  POST /api/news
  ####createNews(title,english,mongolia,image_url1,image_url2,image_url3,image_url4)
```

| Parameter       | Type     | Description  |
| :-------------- | :------- | :----------- |
| `entitle`       | `string` | **Required** |
| `mntitle`       | `string` | **Required** |
| `endescription` | `string` | **Required** |
| `mndescription` | `string` | **Required** |
| `journalist`    | `string` | **Required** |
| `image_url`     | `string` | **Required** |

```https
  POST /api/news/:id
  ####delete news(id)

```

POST /api/messages

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `purpose`     | `enum`   | `international, domestic, other` |
| `firstname`   | `string` | **Required**                     |
| `lastname`    | `string` | **Required**                     |
| `email`       | `string` | **Required**                     |
| `phonenumber` | `string` | **Required**                     |
| `country`     | `string` | **Required**                     |
| `state`       | `string` | **Required**                     |
| `city`        | `string` | **Required**                     |
| `bussiness`   | `string` | **Required**                     |
| `plan`        | `string` | **Required**                     |
