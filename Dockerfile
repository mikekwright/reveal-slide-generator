FROM alpine

ADD template/ /template
ADD generate /generate

WORKDIR /output
CMD ["/generate"]

