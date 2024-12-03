import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useAuthStore } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { DoorOpen } from 'lucide-react'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
  gameName: z.string().min(2).max(50),
  files: z.array(z.custom<File>()).min(1)
})

export const AddFilesModal: FC = () => {
  const navigate = useNavigate()
  const { error, signOut } = useAuthStore()

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameName: '',
      files: []
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files)
      setSelectedFiles(filesArray)
      form.setValue('files', filesArray)
    }
  }

  const handleClose = () => {
    form.reset()
    setSelectedFiles([])
  }

  const handleSignOut = async () => {
    await signOut()
    if (error) return
    navigate('/sign-in', { replace: true })
  }

  return (
    <Dialog modal onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <div className="flex gap-2">
          <Button className="w-full">ADD FILES</Button>
          <Button variant="outlined" size="icon" onClick={handleSignOut}>
            <DoorOpen />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add your files</DialogTitle>
              <DialogDescription>Add the files you want to add to the storage.</DialogDescription>
            </DialogHeader>
            <div className="mb-4 mt-2 space-y-2">
              <FormField
                control={form.control}
                name="gameName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Game name</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input placeholder="Core Keeper" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="files"
                render={() => (
                  <FormItem>
                    <FormLabel>Files</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="Core Keeper"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <ScrollArea className="h-52">
                <ul>
                  {selectedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                  ))}
                </ul>
                <ScrollBar />
              </ScrollArea>
            </div>
            <DialogFooter className="justify-stretch">
              <DialogClose asChild>
                <Button className="grow" variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </DialogClose>
              <Button className="grow" type="submit">
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
