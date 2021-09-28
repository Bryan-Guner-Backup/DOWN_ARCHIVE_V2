// prettier-ignore
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("property")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("property").insert([
        {address: "1600 Pennsylvania Ave",city: "Washington",state: "DC",zip: "20500",country: "United States of America",img:  "https://www.whitehouse.gov/wp-content/uploads/2017/12/P20170614JB-0303-2-1024x683.jpg",manager_id: 1,
        },
        {address: "17 South Ohio St.",city: "New City",state: "NY",zip: "10956",country: "United States of America",img:  "https://www.habitatforhumanity.org.uk/wp-content/uploads/2017/10/what-is-a-slum-definition-in-romania.jpg",manager_id: 1,
        },
        {address: "546 School Street",city: "Yakima",state: "WA",zip: "98908",country: "United States of America",img: "https://frinkiac.com/img/S12E18/1067483.jpg",manager_id: 1,
        },
        {address: "612 Wild Horse Street",city: "Tucker",state: "GA",zip: "30084",country: "United States of America",img:  "https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg",manager_id: 3,
        },
        {address: "397 Princess St.",city: "Shelbyville",state: "TN",zip: "37160",country: "United States of America",img:  "https://upload.wikimedia.org/wikipedia/en/4/49/Lambdaschoolofmusicandfinearts.png",manager_id: 1,
        },
        {address: "9545 W. Maple Dr.",city: "West Orange",state: "NJ",zip: "07052",country: "United States of America",img:  "https://d1xyolhen8fnqh.cloudfront.net/media/hotels/slideshow_images_staged/large/1075224.jpg",manager_id: 1,
        },
        {address: "86 York St.",city: "Middle River",state: "MD",zip: "21220",country: "United States of America",img:  "https://previews.123rf.com/images/ggfoto/ggfoto1909/ggfoto190901479/130522681-matamata-new-zealand-october-10-2018-hobbit-house-hobbiton-movie-set.jpg",manager_id: 3,
        },
      ]);
    });
};
