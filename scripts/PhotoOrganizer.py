#! /usr/bin/env python
import os
import os.path
import shutil
import subprocess

S3_PATH = "https://s3-us-west-1.amazonaws.com/eithanshavit.com/img/gallery"
CATEGORY = "more"
DIR = "./"
NAMING_START = 1
RESAMPLE_WIDTH = 1024
RESAMPLE_HEIGHT = 140

files = [ f for f in os.listdir( DIR ) if os.path.isfile(os.path.join( DIR ,f ) ) ]
with open( DIR + "gallery_%s.json" % CATEGORY, "a" ) as fout:
   fout.write( "[\n" ) 
   for i, f in enumerate( files, NAMING_START ):

      if not os.path.exists( DIR + "thumbs" ):
          os.makedirs( DIR + "thumbs" )
      if not os.path.exists( DIR + "org" ):
          os.makedirs( DIR + "org" )
      if not os.path.exists( DIR + "full" ):
          os.makedirs( DIR + "full" )

      name, ext = os.path.splitext( f )
      if ext.lower() != ".jpg":
         continue
      oldName = '{}{}'.format( name, ext )
      newName = '{}{}'.format( i, ext )
      shutil.copyfile( f, DIR + "org/" + oldName )
      shutil.copyfile( f, DIR + "thumbs/" + newName )
      shutil.copyfile( f, DIR + "full/" + newName )

      subprocess.call( [ "jhead", "-autorot", DIR + "full/" + newName ] )
      subprocess.call( [ "jhead", "-autorot", DIR + "thumbs/" + newName ] )
      subprocess.call( [ "sips", "--resampleWidth", "%d" % RESAMPLE_WIDTH, DIR + "full/" + newName ] )
      subprocess.call( [ "sips", "--resampleHeight", "%d" % RESAMPLE_HEIGHT, DIR + "thumbs/" + newName ] )
       
      fout.write( "   {\n" )
      fout.write( "      \"name\" : \"%s\",\n" % name )
      fout.write( "      \"url\" : \"%s/%s/full/%s\",\n" % ( S3_PATH, CATEGORY, newName ) )
      fout.write( "      \"thumbUrl\" : \"%s/%s/thumbs/%s\",\n" % ( S3_PATH, CATEGORY, newName ) )
      fout.write( "      \"category\" : \"%s\"\n" % CATEGORY )
      fout.write( "   },\n" )
   fout.write( "]\n" )
