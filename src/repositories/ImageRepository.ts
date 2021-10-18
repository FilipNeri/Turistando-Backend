import Image from "../models/Image";
import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(Image)
class ImageRepository extends Repository<Image>{
    

}
export default ImageRepository