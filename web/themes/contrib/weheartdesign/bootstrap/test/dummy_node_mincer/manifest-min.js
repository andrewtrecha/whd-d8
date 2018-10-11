"use strict";
// Build script from https://github.com/nodeca/mincer/tree/master/examples
//
// Require module
//
var Mincer=require("mincer");
//
// Get Mincer environment
//
//
// Configure Mincers logger, by default, all
// messages are going to the middle of nowhere
//
Mincer.logger.use(console);
//
// Create and export environment
//
var environment=new Mincer.Environment(process.cwd()),bootstrapPath="../../";
//
// Configure environment load paths (where to find ssets)
//
// Include bootstrap scss load path
environment.appendPath(bootstrapPath+"assets/stylesheets"),
// Include fonts load path
environment.appendPath(bootstrapPath+"assets/fonts"),
// Include dir with assets, root just for test
environment.appendPath("./"),
//
// Define environment essential *_path helper that will be available in the
// processed assets. See `assets/stylesheets/app.css.ejs` for example.
//
environment.ContextClass.defineAssetPath(function(e,n){var t=this.environment.findAsset(e,n);if(!t)throw new Error("File "+e+" not found");return"/assets/"+t.digestPath});
//
// Create and compile Manifest
//
var manifest_path=process.argv[2]||__dirname+"/assets",manifest=new Mincer.Manifest(environment,manifest_path);manifest.compile(["application.css"],function(e,n){e&&(console.error("Failed compile assets: "+(e.message||e.toString())),process.exit(128)),console.info("\n\nAssets were successfully compiled.\nManifest data (a proper JSON) was written to:\n"+manifest.path+"\n\n"),console.dir(n)});