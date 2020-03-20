exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description", 128).defaultTo('No Description');
        tbl.boolean("completed", 128).defaultTo(false);
      })
      .createTable("contexts", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description", 128).notNullable();
        tbl.string("notes", 128).defaultTo('No Description');
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description", 128).defaultTo('No Description');
      })
      .createTable("project_resources", tbl => {
        tbl.increments();
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      })
      .createTable("project_tasks", tbl => {
        tbl.increments();
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      })
      .createTable("project_context", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description", 128);
        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("project_context")
      .dropTableIfExists("project_tasks")
      .dropTableIfExists("project_resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("contexts")
      .dropTableIfExists("projects")
  };
  