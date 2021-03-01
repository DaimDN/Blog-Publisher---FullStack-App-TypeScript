import * as express from 'express'
import {createServer, Server} from 'http'
import * as Configuration from 'config'
import {ConnectToDatabase} from '../config/connect'

export class Config{
    public static readonly PORT : number = Configuration.get('PORT')
    private app: express.Application
    private port:  String | number
    private server: Server

    constructor(){
        this.createApp()
        this.config()
        this.createServer()
        this.listen()
    }

    private createApp(): void{
        this.app = express();
        this.app.use(express.static("client"))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true})) 
        ConnectToDatabase();

    }
    private config(): void{
        this.port = process.env.PORT || Config.PORT;

    }

    private createServer():  void{
        this.server = createServer(this.app);

    }

    private listen(): void{
this.server.listen(this.port);

    this.server.on("listening", () => {
      let address = this.server.address();
      let uri =
        typeof address === "string"
          ? address
          : `http://localhost:${address.port}`;
           console.log("listening on" + uri);
    });

    this.server.on("error", (Error) => {
      if (Error.stack !== "listen") {
        throw Error;
      }

      let bind =
        typeof this.port === "string" ? "Pipe" + this.port : "Port" + this.port;
      switch (Error.name) {
        case "EACESS":
          console.log("Access denied");
          process.exit(1);

          break;

        case "EADDRINUSE":
          console.log("Address already in use");
          process.exit(1);
          break;

        default:
          throw Error;
      }
    });
    }

    public getApp(): express.Application {
        return this.app;
      }
}