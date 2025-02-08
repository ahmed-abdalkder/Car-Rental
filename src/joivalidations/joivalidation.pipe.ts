import { ArgumentMetadata, BadGatewayException, Injectable, PipeTransform } from '@nestjs/common';
 

@Injectable()
export class JoivalidationPipe implements PipeTransform {

  constructor(private readonly schema:object){}

  transform(value: any, metadata: ArgumentMetadata) {

     if(this.schema[metadata.type]){

      const{error} = this.schema[metadata.type].validate(value,{abortErly:false})

      if(error){

       throw new BadGatewayException()

      }

     return value;
     
    }
  }
}
