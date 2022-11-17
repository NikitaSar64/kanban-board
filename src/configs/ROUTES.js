const ROUTES = {
    main: "/",
    task: {
      createPath: (task, id) => {
        return `/task/${task}/${id}`
      },
      mask: `/task/:type/:id`
    },
    error: "*"
};
  
  export default ROUTES;